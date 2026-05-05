export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full items-center justify-center bg-white px-6 py-4 shadow-sm">
      <p className="text-neutral-500 text-xs">
        &copy; {year} Abraço Amigo. Todos os direitos reservados.
      </p>
    </footer>
  )
}
