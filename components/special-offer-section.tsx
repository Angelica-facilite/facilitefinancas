"use client";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Heart, Shield, Users } from "lucide-react";

export function SpecialOfferSection() {


  return (
    <section id="price" className="min-h-screen  flex items-center justify-center p-4 relative overflow-hidden">


      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl p-6 md:p-12 pulse-glow">
          {/* Urgency Badge */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-destructive text-destructive-foreground px-4 py-2 text-sm font-semibold animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              OFERTA ESPECIAL
            </Badge>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4 leading-tight">
              Pare de Ver seu Dinheiro
              <span className="text-primary block">Sumir Todo Mês</span>
            </h1>
            <p className="text-lg md:text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Aprenda o método que já ajudou centenas de pessoas a conquistarem clareza e liberdade financeira — mesmo
              achando que nunca sobra dinheiro
            </p>
          </div>



          {/* Price Section */}
          <div className="text-center mb-8" id="price">
            <div className="bg-theme-secondary rounded-2xl p-4 md:p-8 mb-6 text-white">
              <p className="  text-lg mb-2">Por apenas</p>
              <div className="text-4xl md:text-6xl font-bold mb-2">12x de R$ 30,72</div>
              <p className=" text-sm">ou R$ 297,00 à vista - menos de R$ 1,00 por dia para transformar sua relação com o dinheiro</p>
            </div>

            <div className="grid md:grid-cols-3 gap-1 mb-8">
              <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Clareza sem julgamentos</span>
              </div>
              <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-xl">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Organização com propósito</span>
              </div>
              <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-xl">
                <Users className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Liberdade sustentável</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <Button
              asChild
              size="lg"
              className="w-full h-16 bg-orange-500 hover:bg-orange-600 md:text-lg text-white font-bold rounded-lg transition-all duration-300"

            >
              <a
                href="https://pay.hotmart.com/K99966247N"
                target="_blank"
                rel="noopener noreferrer"
              >

                SIM! QUERO TER LIBERDADE FINANCEIRA
              </a>
            </Button>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-center mb-4 text-card-foreground">
              Você terá acesso imediato à Jornada da Liberdade Financeira:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Método JLF completo em 3 etapas práticas",
                "Clareza Financeira: entenda seus padrões",
                "Organização com Propósito: sistema personalizado",
                "Liberdade Sustentável: hábitos no piloto automático",
                "Suporte direto com Angelica no WhatsApp",
                "Comunidade de apoio com outros participantes",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-card-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-col md:flex-row flex justify-center items-center gap-6 mt-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Compra 100% Segura</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">Comunidade ativa</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
