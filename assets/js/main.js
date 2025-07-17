function getUserId() {
  let userId = localStorage.getItem("userId")
  if (!userId) {
    userId = "user_" + Math.random().toString(36).substr(2, 9)
    localStorage.setItem("userId", userId)
  }
  return userId
}

const API_BASE =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? "http://127.0.0.1:8787/api"
    : "https://oqueaconteceuem1971.com/api"

function toggleMenu() {
  const menuList = document.getElementById("menu-list")
  const menuIcon = document.querySelector(".menu-icon")
  const fixedTitle = document.querySelector(".fixed-menu-title")
  const menuContainer = document.querySelector(".menu-container")

  // Toggle classes
  menuList.classList.toggle("show")
  menuIcon.classList.toggle("open")

  
  let overlay = document.querySelector(".menu-overlay")

  if (menuList.classList.contains("show")) {
    
    if (!overlay) {
      overlay = document.createElement("div")
      overlay.className = "menu-overlay"
      document.body.appendChild(overlay)

      
      overlay.addEventListener("click", closeMenu)
    }

    
    setTimeout(() => {
      overlay.classList.add("show")
    }, 100)

    
    if (window.innerWidth >= 768) {
      setTimeout(() => {
        if (fixedTitle) fixedTitle.classList.add("show")
      }, 200)
    }

    
    document.body.style.overflow = "hidden"
  } else {
    
    closeMenu()
  }
}

function closeMenu() {
  const menuList = document.getElementById("menu-list")
  const menuIcon = document.querySelector(".menu-icon")
  const fixedTitle = document.querySelector(".fixed-menu-title")
  const overlay = document.querySelector(".menu-overlay")

  
  menuList.classList.remove("show")
  menuIcon.classList.remove("open")
  if (fixedTitle) fixedTitle.classList.remove("show")

  
  if (overlay) {
    overlay.classList.remove("show")
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay)
      }
    }, 300)
  }

  
  document.body.style.overflow = ""
}


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const menuList = document.getElementById("menu-list")
    if (menuList.classList.contains("show")) {
      closeMenu()
    }
  }
})


window.addEventListener("resize", () => {
  const menuList = document.getElementById("menu-list")
  if (menuList.classList.contains("show") && window.innerWidth >= 1024) {
    closeMenu()
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container")
  const chartContainersAll = document.querySelectorAll(".chart-container")
  const chart1 = chartContainersAll[0]

  const menuObserver = new IntersectionObserver(
    ([entry]) => {
      if (window.innerWidth >= 768) {
        const fixedSignature = document.getElementById("fixed-signature")
        const menuContainer = document.querySelector(".menu-container")

        if (!entry.isIntersecting) {
          
          menuContainer.style.display = "flex"
          if (fixedSignature) fixedSignature.style.display = "block"
        } else {
          
          const fixedTitle = document.querySelector(".fixed-menu-title")
          if (fixedTitle) fixedTitle.classList.remove("show")

          setTimeout(() => {
            menuContainer.style.display = "none"
            if (fixedSignature) fixedSignature.style.display = "none"
          }, 300)
        }
      } else {
        
        document.querySelector(".menu-container").style.display = "flex"
      }
    },
    {
      threshold: 0.5,
    },
  )

  menuObserver.observe(chart1)

  document.querySelectorAll("#menu-list a").forEach((anchor) => {
    anchor.addEventListener(
      "click",
      function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          
          closeMenu()
        }
      },
      { passive: false },
    )
  })

  const video = document.querySelector(".bg-video")
  if (video) {
    video.removeAttribute("loop")
    video.currentTime = 4

    video.addEventListener("timeupdate", () => {
      if (video.currentTime >= 9.35) {
        video.pause()
        video.currentTime = 0
        video.play().catch((error) => console.error("Error resuming video playback:", error))
      }
    })
  }

  const scriptObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const scriptSrc = `assets/js/${entry.target.id}.js`
          if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
            const scriptId = entry.target.id
            loadScript(scriptId)
            scriptObserver.unobserve(entry.target)
          }
        }
      })
    },
    { threshold: 0.1 },
  )

  const initialSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          history.replaceState(null, null, window.location.pathname)
        }
      })
    },
    { threshold: 0.5 },
  )

  const initialSection = document.getElementById("oqueaconteceuem1971")
  if (initialSection) {
    initialSectionObserver.observe(initialSection)
  }

  const urlObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const graphId = entry.target.id
          history.replaceState(null, null, `#${graphId}`)
        }
      })
    },
    { threshold: 0.7 },
  )

  function showComments(chartId) {
    const chartTitle = document
      .getElementById(chartId)
      .closest(".chart-container")
      .querySelector(".chart-title").textContent

    const overlay = document.createElement("div")
    overlay.className = "comments-overlay"
    document.body.appendChild(overlay)

    const sheet = document.createElement("div")
    sheet.className = "comments-sheet"
    sheet.innerHTML = `
            <div class="comments-header">
                <div class="comments-handle"></div>
                <h3 class="comments-title">Comentários</h3>
                <p class="comments-subtitle">${chartTitle}</p>
                <span class="comments-close">×</span>
            </div>
            <div class="comments-list">
                <!-- Comments will appear here -->
            </div>
            <div class="comments-input-container">
                <textarea placeholder="Adicione um comentário..."></textarea>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                        <path d="M89.999 3.075C90 3.02 90 2.967 89.999 2.912c-0.004-0.134-0.017-0.266-0.038-0.398-0.007-0.041-0.009-0.081-0.018-0.122-0.034-0.165-0.082-0.327-0.144-0.484-0.018-0.046-0.041-0.089-0.061-0.134-0.053-0.119-0.113-0.234-0.182-0.346C89.528 1.382 89.5 1.336 89.469 1.29c-0.102-0.147-0.212-0.288-0.341-0.417-0.13-0.13-0.273-0.241-0.421-0.344-0.042-0.029-0.085-0.056-0.129-0.082-0.118-0.073-0.239-0.136-0.364-0.191-0.039-0.017-0.076-0.037-0.116-0.053-0.161-0.063-0.327-0.113-0.497-0.147-0.031-0.006-0.063-0.008-0.094-0.014-0.142-0.024-0.285-0.038-0.429-0.041C87.03 0 86.983 0 86.936 0.001c-0.141 0.003-0.282 0.017-0.423 0.041-0.035 0.006-0.069 0.008-0.104 0.015-0.154 0.031-0.306 0.073-0.456 0.129L1.946 31.709c-1.124 0.422-1.888 1.473-1.943 2.673-0.054 1.199 0.612 2.316 1.693 2.838l34.455 16.628 16.627 34.455C53.281 89.344 54.334 90 55.481 90c0.046 0 0.091-0.001 0.137-0.003c1.199-0.055 2.251-0.819 2.673-1.943L89.815 4.048c0.056-0.149 0.097-0.3 0.128-0.453 0.008-0.041 0.011-0.081 0.017-0.122C89.982 3.341 89.995 3.208 89.999 3.075zM75.086 10.672L37.785 47.973 10.619 34.864 75.086 10.672zM55.136 79.381L42.027 52.216l37.302-37.302L55.136 79.381z"/>
                    </svg>
                </button>
            </div>
        `

    document.body.appendChild(sheet)
    loadComments(chartId)
    const textarea = sheet.querySelector("textarea")
    const submitButton = sheet.querySelector("button")

    textarea.addEventListener("input", () => {
      submitButton.disabled = !textarea.value.trim()
    })

    submitButton.addEventListener("click", async () => {
      const content = textarea.value.trim()
      if (!content) return

      try {
        const response = await fetch(`${API_BASE}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chartId,
            content,
            userId: getUserId(),
          }),
        })

        if (response.ok) {
          textarea.value = ""
          await loadComments(chartId)
        }
      } catch (error) {
        console.error("Error posting comment:", error)
      }
    })

    sheet.offsetHeight
    sheet.classList.add("open")
    overlay.classList.add("open")

    function closeSheet() {
      const sheet = document.querySelector(".comments-sheet")
      const overlay = document.querySelector(".comments-overlay")

      sheet.classList.remove("open")
      overlay.classList.remove("open")

      sheet.addEventListener(
        "transitionend",
        () => {
          sheet.remove()
          overlay.remove()
        },
        { once: true },
      )
    }

    overlay.addEventListener("click", closeSheet)
    sheet.querySelector(".comments-close").addEventListener("click", closeSheet)
  }

  function setupIcons(chartId) {
    const chartContainer = document.getElementById(chartId).closest(".chart-container")
    const relativeContainer = chartContainer.querySelector('div[style="position: relative"]')

    const iconsContainer = document.createElement("div")
    iconsContainer.className = "icons-container"

    const iconsRow = document.createElement("div")
    iconsRow.className = "icons-row"

    const commentIcon = document.createElement("img")
    commentIcon.src = "assets/img/comment-icon.svg"
    commentIcon.className = "comment-icon"
    commentIcon.onclick = () => showComments(chartId)
    commentIcon.alt = "Comentários"

    const fonteContainer = document.createElement("div")
    fonteContainer.className = "fonte-container"
    const fonteIcon = document.createElement("img")
    fonteIcon.src = "assets/img/fonte-icon.svg"
    fonteIcon.className = "fonte-icon"
    fonteIcon.alt = "Fonte"

    const shareIcon = document.createElement("img")
    shareIcon.src = "assets/img/share-icon.svg"
    shareIcon.className = "share-icon"
    shareIcon.onclick = () => shareChart(shareIcon)
    shareIcon.alt = "Share"

    const explanationButton = document.createElement("button")
    explanationButton.className = "explanation-button"

    const infoIcon = document.createElement("img")
    infoIcon.src = "assets/img/info-icon.svg"
    infoIcon.alt = "Explicação"
    infoIcon.className = "info-icon"
    explanationButton.appendChild(infoIcon)

    explanationButton.addEventListener("click", () => {
      const container = document.getElementById(chartId).closest(".chart-container")
      const graphAndLabels = container.querySelector(".graph-and-labels")
      const explanation = container.querySelector(".explanation")
      const isMobile = window.innerWidth < 768

      let touchHandlers = null

      if (!explanation.classList.contains("show")) {
        if (isMobile) {
          const handle = document.createElement("div")
          handle.className = "explanation-handle"
          explanation.insertBefore(handle, explanation.firstChild)

          const closeBtn = document.createElement("div")
          closeBtn.className = "explanation-close"
          closeBtn.innerHTML = "×"
          explanation.appendChild(closeBtn)

          const overlay = document.createElement("div")
          overlay.className = "explanation-overlay"
          document.body.appendChild(overlay)

          setTimeout(() => overlay.classList.add("show"), 10)

          overlay.addEventListener("click", () => handleClose(true), { passive: true })
          closeBtn.addEventListener("click", () => handleClose(true), { passive: true })

          touchHandlers = {
            startY: 0,
            currentY: 0,
            handleTouchStart: (e) => {
              touchHandlers.startY = e.touches[0].clientY
              explanation.style.transition = "none"
            },
            handleTouchMove: (e) => {
              touchHandlers.currentY = e.touches[0].clientY
              const diff = touchHandlers.currentY - touchHandlers.startY
              if (diff > 0) {
                const percentMove = (diff / window.innerHeight) * 100
                explanation.style.transform = `translateX(${percentMove}%)`
              }
            },
            handleTouchEnd: () => {
              explanation.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              if (touchHandlers.currentY - touchHandlers.startY > 80) {
                handleClose(true)
              } else {
                explanation.style.transform = "translateX(0)"
              }
            },
          }

          explanation.addEventListener("touchstart", touchHandlers.handleTouchStart, { passive: true })
          explanation.addEventListener("touchmove", touchHandlers.handleTouchMove, { passive: false })
          explanation.addEventListener("touchend", touchHandlers.handleTouchEnd, { passive: true })
        }

        explanation.style.display = "block"
        setTimeout(() => {
          explanation.classList.add("show")
          if (!isMobile) {
            graphAndLabels.classList.add("show-explanation")
          }
        }, 10)
      } else {
        handleClose(false)
      }

      function handleClose(animate = true) {
        if (isMobile && animate) {
          explanation.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          explanation.style.transform = "translateX(100%)"

          const overlay = document.querySelector(".explanation-overlay")
          if (overlay) {
            overlay.classList.remove("show")
          }
        } else {
          explanation.classList.add("hiding")
          if (!isMobile) {
            graphAndLabels.classList.remove("show-explanation")
          }
        }

        if (touchHandlers) {
          explanation.removeEventListener("touchstart", touchHandlers.handleTouchStart)
          explanation.removeEventListener("touchmove", touchHandlers.handleTouchMove)
          explanation.removeEventListener("touchend", touchHandlers.handleTouchEnd)
        }

        setTimeout(() => {
          explanation.classList.remove("show")
          explanation.classList.remove("hiding")
          explanation.style.display = "none"
          explanation.style.transform = ""
          explanation.style.transition = ""

          if (isMobile) {
            const overlay = document.querySelector(".explanation-overlay")
            if (overlay) overlay.remove()

            const handle = explanation.querySelector(".explanation-handle")
            const closeBtn = explanation.querySelector(".explanation-close")
            if (handle) handle.remove()
            if (closeBtn) closeBtn.remove()
          }
        }, 300)
      }
    })

    iconsRow.appendChild(commentIcon)
    iconsRow.appendChild(fonteContainer)
    iconsRow.appendChild(shareIcon)
    iconsRow.appendChild(explanationButton)

    iconsContainer.appendChild(iconsRow)
    relativeContainer.appendChild(iconsContainer)

    const fonte = chartContainer.querySelector(".fonte")
    if (fonte) {
      const oldIcon = fonte.querySelector("img")
      if (oldIcon) oldIcon.remove()

      fonteContainer.appendChild(fonte)
      fonteIcon.addEventListener("click", (e) => {
        e.stopPropagation()
        fonte.classList.toggle("show")
      })
      document.addEventListener(
        "click",
        () => {
          fonte.classList.remove("show")
        },
        { passive: true },
      )
      fonteContainer.appendChild(fonteIcon)
    }
  }

  const chartContainers = [
    "produtividade-crescimento",
    "divida-americana",
    "inflacao-acumulada",
    "casa-renda",
    "preco-ouro",
    "preco-petroleo",
    "anos-casa",
    "taxa-natalidade",
    "taxa-encarceramento",
    "cpi-us",
    "m2-supply",
    "primeiro-casamento",
    "desigualdade-renda",
    "superavit-federal",
    "jovens-morando",
    "remuneracao-pib",
    "taxa-poupanca",
    "balanca-produtos",
    "renda-1",
    "salarios-ceo-normal",
    "dolar-1635",
  ]

  chartContainers.forEach((id) => {
    const container = document.getElementById(id)
    if (container) {
      scriptObserver.observe(container)
      urlObserver.observe(container)
    }
  })

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return

    const chartContainers = Array.from(document.querySelectorAll(".chart-container"))
    const current = getCurrentChartContainer()
    const idx = chartContainers.indexOf(current)

    if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
      if (idx > 0) {
        chartContainers[idx - 1].scrollIntoView({ behavior: "smooth", block: "start" })
        e.preventDefault()
      }
    }
    if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
      if (idx < chartContainers.length - 1) {
        chartContainers[idx + 1].scrollIntoView({ behavior: "smooth", block: "start" })
        e.preventDefault()
      }
    }
    if (e.key === "q" || e.key === "Q") {
      const snap = document.querySelector(".snap-container")
      if (snap) {
        snap.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      e.preventDefault()
    }
    if (e.key === "z" || e.key === "Z") {
      toggleMenu()
      e.preventDefault()
    }
  })
})

async function shareChart(shareButton) {
  const container = shareButton.closest(".chart-container")
  const title = container.querySelector(".chart-title").textContent
  const chartId = container.querySelector(".canvas")?.id || container.querySelector("img")?.id
  const shareUrl = `${window.location.origin}${window.location.pathname}#${chartId}`

  async function generateShareImage() {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const chartContainer = container.querySelector('[style="position: relative"]')
    const chartWidth = chartContainer.offsetWidth
    const chartHeight = chartContainer.offsetHeight
    const isMobile = window.innerWidth <= 768

    canvas.width = chartWidth
    canvas.height = chartHeight + (isMobile ? 120 : 150)

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "black"
    ctx.font = `bold ${isMobile ? "24px" : "44px"} Liter`
    ctx.textAlign = "center"
    ctx.fillText("O QUE ACONTECEU EM 1971?", canvas.width / 2, isMobile ? 35 : 50)

    ctx.font = `${isMobile ? "14px" : "20px"} Liter`
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)"
    ctx.fillText("oqueaconteceuem1971.com", canvas.width / 2, isMobile ? 55 : 75)

    ctx.fillStyle = "black"
    ctx.font = `${isMobile ? "15px" : "26px"} Liter`
    ctx.fillText(title, canvas.width / 2, isMobile ? 85 : 130)

    try {
      const html2canvas = (await import("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.esm.js"))
        .default
      const chartImage = await html2canvas(chartContainer, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true,
      })

      ctx.drawImage(chartImage, 0, isMobile ? 120 : 150, chartWidth, chartHeight)

      ctx.save()
      ctx.font = `${isMobile ? "16px" : "20px"} Liter`
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.restore()
    } catch (error) {
      console.error("Error creating image:", error)
    }

    return canvas.toDataURL("image/png")
  }

  if (navigator.share) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const imageBlob = await (await fetch(await generateShareImage())).blob()
      const file = new File([imageBlob], "chart.png", { type: "image/png" })
      await navigator.share({ files: [file] })
      return
    } catch (err) {
      console.log("Erro ao compartilhar:", err)
    }
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 400))
    const imageDataUrl = await generateShareImage()
    const img = await fetch(imageDataUrl)
    const blob = await img.blob()

    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })])
    alert("Gráfico copiado para a área de transferência!")
  } catch (err) {
    try {
      await navigator.clipboard.writeText(shareUrl)
      alert("Link do gráfico copiado para a área de transferência!")
    } catch (clipErr) {
      console.error("Erro ao copiar para a área de transferência:", clipErr)
    }
  }
}

async function loadComments(chartId) {
  const commentsList = document.querySelector(".comments-list")

  try {
    const response = await fetch(`${API_BASE}/comments?chartId=${chartId}`)
    const comments = await response.json()

    commentsList.innerHTML = comments
      .map(
        (comment) => `
            <div class="comment">
                <div class="comment-main">
                    <div class="comment-header">
                        <span class="comment-user">${escapeHtml(comment.user_id)}</span>
                        <span class="comment-time">${formatTimestamp(comment.created_at)}</span>
                    </div>
                    <div class="comment-content">${escapeHtml(comment.content)}</div>
                </div>
            </div>
        `,
      )
      .join("")
  } catch (error) {
    console.error("Error loading comments:", error)
  }
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function formatTimestamp(timestamp) {
  if (!timestamp) return ""

  const now = Math.floor(Date.now() / 1000)
  const diffSecs = now - timestamp

  if (isNaN(diffSecs)) return ""

  if (diffSecs < 60) return "agora"
  if (diffSecs < 3600) return `${Math.floor(diffSecs / 60)}m`
  if (diffSecs < 86400) return `${Math.floor(diffSecs / 3600)}h`
  if (diffSecs < 604800) return `${Math.floor(diffSecs / 86400)}d`
  if (diffSecs < 2419200) return `${Math.floor(diffSecs / 604800)}sem`

  const date = new Date(timestamp * 1000)
  return date
    .toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    })
    .replace(".", "")
}

function loadScript(scriptId) {
  const scriptSrc = `assets/js/${scriptId}.js`
  if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
    const script = document.createElement("script")
    script.src = scriptSrc
    document.body.appendChild(script)
  }
}

async function fetchMarketStatus(marketId) {
  try {
    const response = await fetch(`${API_BASE}/markets/${marketId}/status`)
    const data = await response.json()
    console.log("Market Status:", data.status)
  } catch (error) {
    console.error("Error fetching market status:", error)
  }
}

function getCurrentChartContainer() {
  const chartContainers = document.querySelectorAll(".chart-container")
  let mostVisibleChart = null
  let maxVisibleArea = 0

  chartContainers.forEach((container) => {
    const rect = container.getBoundingClientRect()
    const viewHeight = window.innerHeight || document.documentElement.clientHeight

    const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0)
    const visibleArea = visibleHeight > 0 ? visibleHeight * rect.width : 0

    if (visibleArea > maxVisibleArea) {
      maxVisibleArea = visibleArea
      mostVisibleChart = container
    }
  })

  return mostVisibleChart
}

function toggleExplanation() {
  const toggleSwitch = event.currentTarget
  const explanation = toggleSwitch.closest(".chart-container").querySelector(".explanation")

  toggleSwitch.classList.toggle("active")
  explanation.classList.toggle("visible")
}

function toggleComments() {
  const currentChart = getCurrentChartContainer()
  if (!currentChart) return

  const commentButton = currentChart.querySelector(".comment-icon")
  if (commentButton) {
    commentButton.click()
  }

  toggleMobileNavActiveState("comment")
}

function toggleSource() {
  const currentChart = getCurrentChartContainer()
  if (!currentChart) return

  const sourceButton = currentChart.querySelector(".fonte-icon")
  if (sourceButton) {
    sourceButton.click()
  }

  toggleMobileNavActiveState("source")
}

function shareCurrentChart() {
  const currentChart = getCurrentChartContainer()
  if (!currentChart) return

  const shareButton = currentChart.querySelector(".share-icon")
  if (shareButton) {
    shareButton.click()
  }

  toggleMobileNavActiveState("share")
}

function toggleMobileNavActiveState(activeType) {
  const navIcons = document.querySelectorAll(".mobile-nav-icon")
  navIcons.forEach((icon) => {
    const imgAlt = icon.querySelector("img")?.alt?.toLowerCase()
    if (imgAlt && imgAlt.includes(activeType)) {
      icon.classList.add("active")
    } else {
      icon.classList.remove("active")
    }
  })
}
