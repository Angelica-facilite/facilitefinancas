import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CertificateSection() {
  return (
    <section className="bg-yellow-400 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                Um curso intensivo para você aprender a entrar no marketing digital
              </h2>
            </div>

            <p className="text-lg">E levar um certificado reconhecido pelo mercado</p>

            <div className="space-y-2">
              <p className="text-lg">Para garantir que vai receber o seu, se cadastre clicando abaixo:</p>

              <Button className="h-12 bg-white hover:bg-gray-100 text-black font-bold">
                Quero participar agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Certificado do curso"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

