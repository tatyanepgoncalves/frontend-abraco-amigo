export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center py-4">
      <p className="text-muted-foreground text-xs">
        &copy; {year} - Abraço Amigo
      </p>
    </footer>
  )
}
