import DialogDemanda from './dialog-demanda'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-cyan-100 px-6 py-4">
      <p className="font-semibold text-cyan-900 text-lg">Abraço Amigo</p>

      {/* <div className="flex gap-4">
        <DialogUsuario />
        <AuthGestorDialog />
      </div> */}
      <DialogDemanda />
    </header>
  )
}
