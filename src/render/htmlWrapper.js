import {
  favicon
} from './favicon'

const COMMIT_HASH = 'ad7b598'

const pagination = (pIdx, attrs) => {
  const getAttrs = (c, h, isNext) =>
    `class="${c}" ${h ? `href="pagination?page=${h}"` : ''} ${isNext === undefined ? '' : `id=${c.includes('pre') ?
'pagination-pre' : 'pagination-next'}`
}`
  if (pIdx) {
    switch (pIdx) {
      case pIdx < 0 ? pIdx:
        null: attrs = [getAttrs('pre', -pIdx - 1, 0), getAttrs('next off', null)]
        break
      case 1:
        attrs = [getAttrs('pre off', null), getAttrs('next', pIdx + 1, 1)]
        break
      default:
        attrs = [getAttrs('pre', pIdx - 1, 0),
          getAttrs('next', pIdx + 1, 1)
        ]
    }
    return `${`<a ${attrs[0]}><i class="fas fa-angle-left" style="font-size: 8px;"></i>
  PREV</a>`}<span>Page ${pIdx}</span> ${`<a ${attrs[1]}>NEXT <i class="fas fa-angle-right"
      style="font-size: 8px;"></i></a>`}`
  }
  return ''
}

export function renderHTML(body, pLink, pIdx) {
  pLink = pLink || ''
  const p = 'window[pLinkId]'

  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>CloudDrive - 书樱寄语</title>
    <link rel="shortcut icon" type="image/png" sizes="16x16" href="${favicon}" />
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/gh/spencerwooo/onedrive-cf-index@${COMMIT_HASH}/themes/spencer.css"
      rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@gh-pages/github-markdown.css"
      rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/gh/spencerwooo/onedrive-cf-index@${COMMIT_HASH}/themes/prism-github.css"
      rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
      integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js" data-manual></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/plugins/autoloader/prism-autoloader.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/turbolinks@5.2.0/dist/turbolinks.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/pipwerks/PDFObject/pdfobject.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flv.js@1.5.0/dist/flv.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
    <script>
      var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', { easing: 'easeInCubic' });
    </script>
  </head>
  
  <body
    class="mdui-appbar-with-toolbar mdui-loaded mdui-theme-primary-blue mdui-text-color-black-text mdui-theme-accent-pink mdui-theme-layout-auto">
    <header class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide">
      <div class="mdui-toolbar mdui-color-theme">
        <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
          mdui-drawer="{target: '#main-drawer', swipe: true}"><i class="mdui-icon material-icons">menu</i></span>
        <a href="https://sakurapuare.com" class="mdui-typo-headline mdui-hidden-xs">书樱寄语</span></a>
        <a href="/"><span class="mdui-typo-title">CloudDrive</span></a>
        <div class="mdui-toolbar-spacer"></div>
      </div>
    </header>
    <p id="top" style="position: absolute;top:-20px;left:50%;"></p>
    <div class="mdui-drawer mdui-drawer-close mdui-shadow-6 mdui-hoverable" id="main-drawer">
      <ul class="mdui-list">
        <li class="mdui-list-item mdui-ripple ">
          <div class="mdui-list-item-avatar"><img src="https://sakurapuare.com/wp-content/uploads/2021/05/favicon.ico" />
          </div>
          <div class="mdui-list-item-content">
            <div class="mdui-list-item-title">SakuraPuare</div>
            <div class="mdui-list-item-text mdui-list-item-one-line">
              <span class="mdui-text-color-theme-text">记录心情，记录生活</span>
            </div>
          </div>
        </li>
      </ul>
      <ui class="mdui-list">
        <li class="mdui-subheader-inset">Web</li>
        <li class="mdui-list-item mdui-ripple">
          <i class="mdui-list-item-avatar mdui-icon material-icons mdui-color-blue mdui-text-color-white">home</i>
          <div class="mdui-list-item-content mdui-list-dense"><a href="https://sakurapuare.com">
              <div class="mdui-list-item-title">Home</div>
              <div class="mdui-list-item-text">SakuraPuare's blog</div>
          </div></a>
        </li>
        <li class="mdui-list-item mdui-ripple">
          <i
            class="mdui-list-item-avatar mdui-icon material-icons mdui-color-pink mdui-text-color-white">desktop_windows</i>
          <div class="mdui-list-item-content mdui-list-dense"><a href="https://monitor.sakurapuare.com">
              <div class="mdui-list-item-title">Monitor</div>
              <div class="mdui-list-item-text">Server Monitor</div>
          </div></a>
        </li>
        <li class="mdui-list-item mdui-ripple">
          <i class="mdui-list-item-avatar mdui-icon material-icons mdui-color-red mdui-text-color-white">cloud</i>
          <div class="mdui-list-item-content mdui-list-dense"><a href="https://drive.sakurapuare.com">
              <div class="mdui-list-item-title">CloudDrive</div>
              <div class="mdui-list-item-text">Server Monitor</div>
          </div></a>
        </li>
        <li class="mdui-subheader-inset">Page</li>
        <li class="mdui-list-item mdui-ripple">
          <i class="mdui-list-item-avatar mdui-icon material-icons mdui-color-green mdui-text-color-white">code</i>
          <div class="mdui-list-item-content mdui-list-dense"><a href="https://github.sakurapuare.com">
              <div class="mdui-list-item-title">Github</div>
              <div class="mdui-list-item-text">GitHub Mirror Page</div>
          </div></a>
          </ul>
    </div>
    ${body}
    <div class="paginate-container">${pagination(pIdx)}</div>
    <div id="flex-container" data-turbolinks-permanent style="flex-grow: 1;"></div>
    <a data-easing="easeInOutCubic" href="#top"><span class="mdui-fab mdui-fab-fixed mdui-color-theme-accent mdui-ripple">
        <i class="mdui-icon material-icons">keyboard_arrow_up</i></span></a>
    <footer id="footer" data-turbolinks-permanent>
      <p>Powered by <a href="https://github.com/ShuYingJiYu/MDUI-onedrive-index">MDUI-onedrive-index</a>, hosted on <a
          href="https://workers.cloudflare.com/">Cloudflare Workers</a>.</p>
    </footer>
    <script>
      if (typeof ap !== "undefined" && ap.paused !== true) {
        ap.destroy()
        ap = undefined
      }
      if (typeof dp !== "undefined" && dp.paused !== true) {
        dp.destroy()
        dp = undefined
      }
      Prism.highlightAll()
      mediumZoom('[data-zoomable]')
      Turbolinks.Location.prototype.isHTML = () => { return true }
      Turbolinks.start()
      pagination()

      function pagination() {
        if ('${pLink ? 1 : ''}') {
          if (location.pathname.endsWith('/')) {
            pLinkId = history.state.turbolinks.restorationIdentifier
            ${ p } = { link: ['${pLink}'], idx: 1 }
          } else if (!window.pLinkId) {
            history.pushState(history.state, '', location.pathname.replace('pagination', '/'))
            return
          }
          if (${ p }.link.length < ${ p }.idx) (${ p } = { link: [...${ p }.link, '${pLink}'], idx: ${ p }.idx })
        }
        listen = ({ isNext }) => {
          isNext ? ${ p }.idx++ : ${ p }.idx--
          addEventListener(
            'turbolinks:request-start',
            event => {
              const xhr = event.data.xhr
              xhr.setRequestHeader('pLink', ${ p }.link[${ p }.idx - 2])
              xhr.setRequestHeader('pIdx', ${ p }.idx + '')
            },
            { once: true }
          )
        }
        preBtn = document.getElementById('pagination-pre')
        nextBtn = document.getElementById('pagination-next')
        if (nextBtn) {
          nextBtn.addEventListener('click', () => listen({ isNext: true }), { once: true })
        }
        if (preBtn) {
          preBtn.addEventListener('click', () => listen({ isNext: false }), { once: true })
        }
      }
      mdui.mutation()
    </script>
  </body>
  
  </html>`
}