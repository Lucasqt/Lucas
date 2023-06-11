<!DOCTYPE html>
<html lang="en" theme="White">
    <head>
        <meta charset="utf-8">
        <title>discord.gg/revshit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.discordapp.com/avatars/1081898921430884393/320e5b0b74a18cd0f9bd1f239540537f.png?size=1024" rel="shortcut icon" type="image/x-icon">
        <link rel="preload" href="../assets/module/newww/css/app.css" as="style">
        <link rel="stylesheet" href="../assets/module/newww/main.css">
        <link href="../cdn.jsdelivr.net/npm/remixicon%402.5.0/fonts/remixicon.css" rel="stylesheet">
        <link href="../assets/vendors/animation/animate.css" rel="stylesheet">
        <script src="../ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link href="../assets/vendors/animation/animate.css" rel="stylesheet">
        <script src="../assets/scripts/script.js" data-site="IHGLANPG" defer></script>
    </head>
    <body class="devilish">
        <script>
      var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      };
      TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class = "wrap" >' + this.txt + "</span>";
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
          delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      window.onload = function() {
        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-type");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };
        </script>
        <style>
        .max-w-\[1100px\] {
          width: 500px
        }
        </style>
        <main>
            <div class="fixed w-full h-full">
                <video
                    id="backgroundVideo"
                    style="background-position: center;background-repeat: no-repeat;background-size: cover;background-attachment: fixed; background-position: center;object-fit: fill; height: 100%; width: 100%; filter:brightness(50%)"
                    loop
                    hidden="hidden"
                    muted
                >
                    <source src="https://cdn.discordapp.com/attachments/1115661791205269585/1117171727160586391/qweqweq.mp4" type="video/mp4">
                </video>
            </div>
            <style>
          .click_anywhere {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
            </style>
            <div class="clickanywhere premium_border" id="clickanywhere">
                <div class="click_body" style="height:100%;width:100%;">
                    <div class="click_anywhere">
                        <h4 style="color:white;font-size:12pt;">click to open socials. | discord.gg/revshit</h4>
                    </div>
                </div>
            </div>
            <script>
          $(document).ready(function() {
            $(document.body).click(function() {
              $(".clickanywhere").fadeOut(1000);
              $(".biolink").fadeIn(1000);
              let play = function() {
                document.getElementById("audio").play()
                $('audio')[0].volume = 0.2;
              }
            });
          });
            </script>
            <audio id="audio" loop>
                <source id="audio" src="https://cdn.discordapp.com/attachments/1117121333822763061/1117191324274274314/w.mp3" type="audio/mpeg">
                <source id="audio" src="https://cdn.discordapp.com/attachments/1117121333822763061/1117191324274274314/w.mp3" type="audio/ogg">
            </audio>
            <script>
          $(document).ready(function() {
            var iframe = document.getElementById('spotifyembed');
            var audio = document.getElementById("audio")

            iframe.contentWindow.postMessage('startListening', '*');

            window.addEventListener('message', function(event) {
              let data = event.data;
              if (event.data.type === 'playback_update' && event.data.payload) {
                if (!event.data.payload.isPaused && !audio.paused) {
                  $('audio').trigger('pause');
                } else {
                  $('audio').trigger('play');
                }
              }
            });
          });
            </script>
            <style>
        @font-face {
            font-family: 'conthrax-sb';
            src: url('../font/conthrax-sb.otf') format('truetype');
        }
        .bg-main {
          --tw-bg-opacity: 1;
          background-color: rgba(0, 0, 0, 0.5);
        }
            </style>
            <div class="biolink" style="display:none;height:100%;width:100%;">
                <div class="relative w-full h-full px-4 py-16 table">
                    <button id="volumeButton" style="display: flex;top: 0;left : 0;position: absolute;z-index: 9999;" class="w-12 h-12 flex items-center justify-center">
                        <i class="ri-volume-up-line"></i>
                    </button>
                    <div class="table-cell align-middle text-center">
                        <div class="bg-main rounded-md shadow-4xl w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px] mt-14" style="backdrop-filter: blur(8.8px);">
                            <div class="p-10">
                                <div class="not-last-child:mb-8">
                                    <div class="-mt-[85px]">
                                        <img
                                            class="w-44 h-44 rounded-full mx-auto shadow-avatar"
                                            src="https://cdn.discordapp.com/avatars/1081898921430884393/320e5b0b74a18cd0f9bd1f239540537f.png?size=1024"
                                            title="Image"
                                            alt="Image"
                                            draggable="false"
                                        >
                                    </div>
                                </div>
                                <div class="not-last-child:mb-8">
                                    <div class="flex justify-center items-center space-x-2">
                                        <h2 class="text-[20px] text-white font-semibold" style="color: #fff; font-family: 'conthrax-sb';font-size: 24px;font-weight: bold;">
                                            devilish.
                                        </h2>
                                        <!-- <span class="cursor-pointer text-xl" title="Developer">
                                            <div class="verified-icon">
                                                <img src="../upload.wikimedia.org/wikipedia/commons/9/92/4228_discord_bot_dev.png" class="verified-icon-image verified-icon-image-dark" style="position: relative; height: 15px; left: 15%;">
                                            </div>
                                        </span>
                                        <span class="cursor-pointer text-xl" title="Verified">
                                            <div class="verified-icon">
                                                <img src="assets/assets/images/verified.png" class="verified-icon-image verified-icon-image-dark" style="position: relative; height: 15px; left: 15%;">
                                            </div>
                                        </span>
                                        <span class="cursor-pointer text-xl" title="Premium">
                                            <div class="premium">
                                                <img src="assets/assets/images/diamond.png" class="verified-icon-image verified-icon-image-dark" style="height: 12px; left: 60%;">
                                            </div>
                                        </span> -->
                                    </div>
                                </div>
                                <div class="not-last-child:mb-8">
                                    <div class="mx-auto max-w-[750px]">
                                        <p>
                                            <span class="typewrite" data-period="2000" data-type='["I was atheist until I realized I am God."]'>
                                                <span class="wrap"></span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center space-x-2">
                                    <div style="text-align: center;">
                                        <a href="https://discord.com/users/1081898921430884393" target="_blank">
                                            <img src="https://lanyard-profile-readme.vercel.app/api/1081898921430884393?theme=dark&bg=00000000&hideDiscrim=true&idleMessage=real%20eyez%20realize%20real%20lies." style="width: 300px;">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="1w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px]">
                            <center>
                                <div class="1w-full mx-auto card animate-slide-up not-last-child:mb-12 max-w-[1100px] items-center justify-center">
                                    <div class="!p-0" style="max-width:1000px"></div>
                                </div>
                            </center>
                            <div class="!p-0">
                                <div class="flex flex-wrap justify-between gap-6">
                                    <a
                                        href="https://www.youtube.com/@zdevilish1337"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        title="https://www.youtube.com/@zdevilish1337"
                                        class="bg-main rounded-xl flex-[100%] sm:flex-[45%] animate-slide-up shadow-4xl p-3 button"
                                        style="will-change: opacity, transform"
                                    >
                                        <div class="flex items-center justify-between space-x-6">
                                            <span class="bg-secondary rounded-xl aspect-square h-16 p-3 flex items-center justify-center">
                                                <img class="drop-shadow-youtube" src="../assets/module/newww/icons/youtube.svg">
                                            </span>
                                            <h2 class="w-full text-left text-grey">
                                                YouTube
                                            </h2>
                                            <span class="w-20" style="margin-left: 46px;">
                                                <img src="../assets/images/link-button-arrow.png" style="width: 14px;" class="link-arrows">
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                    href="https://www.facebook.com/profile.php?id=100093096360021"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    title="https://www.facebook.com/profile.php?id=100093096360021"
                                    class="bg-main rounded-xl flex-[100%] sm:flex-[45%] animate-slide-up shadow-4xl p-3 button"
                                    style="will-change: opacity, transform"
                                >
                                    <div class="flex items-center justify-between space-x-6">
                                        <span class="bg-secondary rounded-xl aspect-square h-16 p-3 flex items-center justify-center">
                                            <img class="drop-shadow-facebook" src="../assets/module/newww/icons/facebook.svg">
                                        </span>
                                        <h2 class="w-full text-left text-grey">
                                            Facebook
                                        </h2>
                                        <span class="w-20" style="margin-left: 46px;">
                                            <img src="../assets/images/link-button-arrow.png" style="width: 14px;" class="link-arrows">
                                        </span>
                                    </div>
                                </a>
                                    <a
                                        href="https://github.com/zdevilish1337"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        title="https://github.com/zdevilish1337"
                                        class="bg-main rounded-xl flex-[100%] sm:flex-[45%] animate-slide-up shadow-4xl p-3 button"
                                        style="will-change: opacity, transform"
                                    >
                                        <div class="flex items-center justify-between space-x-6">
                                            <span class="bg-secondary rounded-xl aspect-square h-16 p-3 flex items-center justify-center">
                                                <img class="drop-shadow-github" src="../assets/module/newww/icons/github.svg">
                                            </span>
                                            <h2 class="w-full text-left text-grey">
                                                GitHub
                                            </h2>
                                            <span class="w-20" style="margin-left: 46px;">
                                                <img src="../assets/images/link-button-arrow.png" style="width: 14px;" class="link-arrows">
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                        href="https://t.me/devykindasus"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        title="https://t.me/devykindasus"
                                        class="bg-main rounded-xl flex-[100%] sm:flex-[45%] animate-slide-up shadow-4xl p-3 button"
                                        style="will-change: opacity, transform"
                                    >
                                        <div class="flex items-center justify-between space-x-6">
                                            <span class="bg-secondary rounded-xl aspect-square h-16 p-3 flex items-center justify-center">
                                                <img class="drop-shadow-telegram" src="../assets/module/newww/icons/telegram.svg">
                                            </span>
                                            <h2 class="w-full text-left text-grey">
                                                Telegram
                                            </h2>
                                            <span class="w-20" style="margin-left: 46px;">
                                                <img src="../assets/images/link-button-arrow.png" style="width: 14px;" class="link-arrows">
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                    href="https://www.discord.gg/revshit"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    title="https://www.discord.gg/revshit"
                                    class="bg-main rounded-xl flex-[100%] sm:flex-[45%] animate-slide-up shadow-4xl p-3 button"
                                    style="will-change: opacity, transform"
                                >
                                    <div class="flex items-center justify-between space-x-6">
                                        <span class="bg-secondary rounded-xl aspect-square h-16 p-3 flex items-center justify-center">
                                            <img class="drop-shadow-discord" src="../assets/module/newww/icons/discord.svg">
                                        </span>
                                        <h2 class="w-full text-left text-grey">
                                            Discord
                                        </h2>
                                        <span class="w-20" style="margin-left: 46px;">
                                            <img src="../assets/images/link-button-arrow.png" style="width: 14px;" class="link-arrows">
                                        </span>
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script>
      function playclip() {
        if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7") != -1) || (navigator.appVersion.indexOf("MSIE 8") != -1)) {
          if (document.all) {
            document.all.sound.src = "song.html";
          }
        } else {
          {
            var audio = document.getElementsByTagName("audio");
            if (audio.length > 0) audio[0].play();
            var video = document.getElementsByTagName("video");
            if (video.length > 0) {
              video = video[0];
              video.removeAttribute('hidden');
              video.play();
            }
          }
        }
      }

      $('.biolink').on('animationstart', function(event) {
        console.log(event)
        if (event.originalEvent.animationName === 'slide-up') {
          playclip();
        }
      });

    
      var _old = jQuery.Event.prototype.stopPropagation;
      jQuery.Event.prototype.stopPropagation = function() {
        this.target.nodeName !== 'SPAN' && _old.apply(this, arguments);
      };

      $('#volumeButton').click(function() {
        if ($('audio').length > 0) {
          if ($('audio').prop('paused')) {
            $('audio').trigger('play');
            document.getElementById("volumeButton").innerHTML = '<i class="ri-volume-up-line"></i>';
          } else {
            $('audio')[0].pause();
            document.getElementById("volumeButton").innerHTML = '<i class="ri-volume-mute-line"></i>';
          }
        } else {
          if ($('#backgroundVideo').prop('paused')) {
            $('#backgroundVideo').trigger('play');
            document.getElementById("volumeButton").innerHTML = '<i class="ri-volume-up-line"></i>';
          } else {
            $('#backgroundVideo')[0].pause();
            document.getElementById("volumeButton").innerHTML = '<i class="ri-volume-mute-line"></i>';
          }
        }
      });
            </script>
            <script>(function(){var js = "window['__CF$cv$params']={r:'7d52aa4e6913bc49',m:'4ooPGDwaeLT8qZBDvl3AVvYS8byu3n5V1OCfXOk6WTA-1686411128-0-AadoCuATyL+p5RBzyC5nvKjRXvI8boEmdp+y/mdTpzGm'};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='../cdn-cgi/challenge-platform/h/b/scripts/jsd/5da7637f/invisible.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.nonce = '';_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script>
        </body>
    </html>
