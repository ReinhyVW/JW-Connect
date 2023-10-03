"use client"

import { Input } from "@nextui-org/react"

import { User } from "@/images/User"

export default function SignIn() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            variant="bordered"
            color="primary"
            type="email"
            label="Nombre de Usuario"
            placeholder="JRodriguez"
            labelPlacement="outside"
            startContent={
              <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
    </div>
  )
}
