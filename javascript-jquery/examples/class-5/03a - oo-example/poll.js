// This document was written with functions and variables contained within
// an object. This "namespacing" allows us to better organize and package code.

// All public functions/vars:

// variables:
// poll
// API_URL
//
// functions:



$(function(){
	poll.query_posts();
});
var poll = {
	// config
	poll_interval: 10,
	last_poll_timestamp : false,
	/**
	 * Load the posts from any requestor and display them
	 */
	query_posts: function(options,reset){
		var opts = this.set_query(options,reset);
		$.getJSON(API_URL+"/posts?callback=?", opts, function(json){
			poll.prepend_channel_post(json, opts);
			// start polling
			poll.set_last_poll_timestamp(json.query_timestamp);
			poll.init_poll_interval();
		});
	},
	prepend_channel_post: function(json, opts){
		if(json.results.length){
			for(x = 0, l = json.results.length; x < l; x++){
				var p = json.results[x];
				// format dates before loading template
				var date = new Date(p.gmdate_created*1000);
				p.post_date = date.format('m/dd/yy h:MM TT');
				// load template
				var base = $("#tmpl_post_public").tmpl(p);
				
				if(typeof opts.pend_type != 'undefined' && opts.pend_type == 'prepend'){
					$('#posts-poll .posts').prepend(base);
				} else {
					$('#posts-poll .posts').append(base);
				}
				if(typeof opts.is_refresh != 'undefined' && opts.is_refresh == 0){
					base.effect("highlight", {}, 5000);
				}
			}
		}
	},
	set_query: function(options,reset){
		// Load a default set of options. If we've stored a previous set,
		// we'll load those and extend them. Otherwise we'll load a default set.
		if(this.last_used_filters && !reset){
			opts = this.last_used_filters;
		} else {
			opts = {
				all			: '',
				sports		: '',
				group		: '',
				user_id		: '',
				county		: '',
				state		: '',
				since		: '',
				offset		: 0,
				is_refresh	: 1,
				pend_type	: 'append'
			}
		}
		// extend
		jQuery.extend(opts, options);
		// complete refreshes must always append
		if(opts.is_refresh){
			opts.pend_type = 'append';
		}
		// save & return
		this.last_used_filters = jQuery.extend({}, opts);
		this.last_used_filters.since = ''; // never remember a timestamp
		return opts;
	},
	
	/**
	 * Polling
	 */
	set_last_poll_timestamp: function(ts){
		this.last_poll_timestamp = ts; // Using the timestamp returned from server
		// so we're more consistent - variations in client-side clocks could
		// mess us up if timestamps are too close together
	},
	init_poll_interval: function(){
		setTimeout(poll.poll_posts_server,poll.poll_interval*1000);
	},
	poll_posts_server: function(){
		// Every x seconds, we'll poll the server. This really isn't an official
		// Comet/HTTP Streaming server because we're simply querying for the same
		// filters, but with a timestamp.
		poll.query_posts({since:poll.last_poll_timestamp,pend_type:'prepend',offset:0,is_refresh:0});
	}
}