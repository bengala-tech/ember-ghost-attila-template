import Component from "@ember/component";
import layout from "../templates/components/site-navigation";
import { computed } from "@ember/object";
import { getOwner } from "@ember/application";

export default Component.extend({
  layout,
  
  blog: computed(function() {
    return getOwner(this).lookup("service:blog") || {};
  }),

  rssFeed: computed("blog.host", function() {
    if (!this.blog.host) {
      return;
    }
    return `https://feedly.com/i/subscription/feed${encodeURIComponent(
      "/" + this.blog.host + "/rss.xml"
    )}`;
  }),

  click() {
    document.firstElementChild.classList.remove("menu-active");
  }
});
