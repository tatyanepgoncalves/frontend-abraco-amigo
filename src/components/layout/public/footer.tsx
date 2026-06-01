export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-muted px-6 py-4">
      <p className="text-center text-muted-foreground text-xs">
        &copy; {year} Abraço Amigo. Todos os direitos reservados.
      </p>
    </footer>
  )
}
