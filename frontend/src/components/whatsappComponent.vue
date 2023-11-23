<template>
  <div class="whatsapp-popup">
    <div class="whatsapp-button" @click="togglePopup">
      <i class="fab fa-whatsapp i-open"></i>
      <i class="far fa-times-circle fa-fw i-close"></i>
    </div>
    <!-- ... rest of your template ... -->
    <div class="popup-content">
      <div class="popup-content-header">
        <i class="fab fa-whatsapp"></i>
        <h5>Start a Conversation<span>Start a Conversation</span></h5>
      </div>
      <div class="whatsapp-content">
        <ul>
          <li class="online">
            <a
              class="whatsapp-agent"
              href="javascript:void(0)"
              data-number="+9100000000010"
            >
              <div class="whatsapp-img">
                <img
                  src="../uploads/images/whatsapp_agent/c13bb8682b91f563b8cafebea0d6c231.png"
                  class="whatsapp-avatar"
                  width="60"
                  height="60"
                />
              </div>
              <div>
                <span class="whatsapp-text">
                  <span class="whatsapp-label"
                    >Support - <span class="status">Offline</span></span
                  >
                  Neha Aggarwal
                </span>
              </div>
            </a>
          </li>
          <li class="online">
            <a
              class="whatsapp-agent"
              href="javascript:void(0)"
              data-number="+1100000000000"
            >
              <div class="whatsapp-img">
                <img
                  src="../uploads/images/whatsapp_agent/0121d6c5f488e884d23c6edd09bc22e0.png"
                  class="whatsapp-avatar"
                  width="60"
                  height="60"
                />
              </div>
              <div>
                <span class="whatsapp-text">
                  <span class="whatsapp-label"
                    >Billing - <span class="status">Offline</span></span
                  >
                  Jane Doe
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="content-footer">
        <p>Use this feature to chat with our agent.</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "WhatAppComponent",
  methods: {
    togglePopup() {
      $(".whatsapp-popup").toggleClass("open");
    },

    go_to_whatsapp(number, text = "") {
      var WhatsAppUrl = "https://web.whatsapp.com/send";
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        WhatsAppUrl = "https://api.whatsapp.com/send";
      }
      var url = WhatsAppUrl + "?phone=" + number;
      if (text !== "") {
        url += "&text=" + text;
      }
      var win = window.open(url, "_blank");
      win.focus();
    },

    handleAgentClick(event) {
      this.go_to_whatsapp($(event.currentTarget).attr("data-number"));
    },
  },

  mounted() {
    $(".whatsapp-agent").on("click", this.handleAgentClick);
  },

  beforeUnmount() {
    $(".whatsapp-agent").off("click", this.handleAgentClick);
  },
};
</script>
