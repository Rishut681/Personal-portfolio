import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search } from "lucide-react"
import { commandPaletteLinks } from "../../data/portfolioData"

const CommandPalette = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((current) => !current)
      }

      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    const handleOpen = () => setOpen(true)

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("open-command-palette", handleOpen)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("open-command-palette", handleOpen)
    }
  }, [])

  const filteredLinks = useMemo(() => {
    if (!query.trim()) {
      return commandPaletteLinks
    }

    return commandPaletteLinks.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  const handleSelect = (item) => {
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer")
    } else {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    setOpen(false)
    setQuery("")
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="command-palette"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="command-palette__panel"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
          >
            <div className="command-palette__input">
              <Search size={16} />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, links, and actions"
              />
              <span>ESC</span>
            </div>

            <div className="command-palette__results">
              {filteredLinks.map((item) => (
                <button key={item.label} type="button" onClick={() => handleSelect(item)}>
                  <span>{item.label}</span>
                  <small>{item.external ? "External" : item.href}</small>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default CommandPalette
