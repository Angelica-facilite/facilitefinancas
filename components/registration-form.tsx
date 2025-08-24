"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface RegistrationFormProps {
  buttonText: string
}

export default function RegistrationForm({ buttonText }: RegistrationFormProps) {
  const [phoneCode, setPhoneCode] = useState("+55")

  return (
    <div className="space-y-3">
      <Input type="text" placeholder="Digite seu nome completo" className="bg-white text-black h-12" />
      <Input type="email" placeholder="Digite seu melhor e-mail" className="bg-white text-black h-12" />
      <div className="flex">
        <div className="flex items-center bg-white rounded-l-md border-r h-12 px-2">
          <div className="flex items-center gap-1">
            <span className="text-black">{phoneCode}</span>
            <Image
              src="/placeholder.svg?height=20&width=30"
              alt="Brazil flag"
              width={30}
              height={20}
              className="rounded"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <Input
          type="tel"
          placeholder="Digite seu telefone"
          className="bg-white text-black rounded-l-none h-12 flex-1"
        />
      </div>
      <Button className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-xs text-center text-gray-300">
        Ao se inscrever, você concorda em receber comunicações sobre o evento.
      </p>
    </div>
  )
}

