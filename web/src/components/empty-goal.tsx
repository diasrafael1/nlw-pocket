import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

import Image from 'next/image'

const EmptyGoal = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <Image src="/logo.svg" alt="in.orbit" width={200} height={200} />
      <Image src="/lets-start.svg" alt="logo" width={200} height={200} />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}

export default EmptyGoal
