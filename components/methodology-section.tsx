import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MethodologySection() {
    return (
        <section className="py-16 bg-[#101535] ">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-gray-500 uppercase tracking-wider text-sm mb-2">COMO FUNCIONA?</p>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        A <span className="text-orange-500">metodologia JLF</span> consiste em 3 etapas
                    </h2>
                </div>

                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
                    <div className="relative">
                        <div className="relative w-[280px] h-[280px] md:w-[520px] md:h-[520px] mx-auto">
                            <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/01.png?height=320&width=320"
                                    alt="Construir"
                                    width={1080}
                                    height={1080}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute -top-4 left-0">
                                <div className="bg-orange-100 text-xs md:text-2xl uppercase rounded-full px-3 py-1 font-semibold text-orange-500">
                                    Fundamento
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -right-5 w-[70px] h-[70px] md:w-[140px] md:h-[140px]  md:text-5xl  bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                01
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 md:text-xl">
                        <h3 className="text-xl md:text-4xl mb-10 font-bold flex items-center">
                            <span className="text-orange-500 mr-2">1°</span> Fundamento: Clareza Financeira

                        </h3>
                        <p className="">
                            Essa é a base do método — e o que torna tudo possível.
                        </p>
                        <p className="">
                            Antes de tentar cortar gastos ou montar uma planilha complexa, você precisa entender onde está o seu dinheiro hoje,
                            quais são os seus compromissos fixos, seus gastos invisíveis e, principalmente, suas crenças financeiras.
                        </p>
                        <p className="">
                            Aqui, você vai construir uma visão completa e sem julgamentos da sua vida financeira. Vai identificar padrões,
                            reconhecer hábitos que te sabotam e enxergar com clareza os números que antes pareciam confusos.
                        </p>
                        <p className="">
                            A maioria das pessoas tenta se organizar começando pelo fim. A diferença da JLF está no começo: clareza antes de controle.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <div className="space-y-4 md:text-xl">
                            <h3 className="text-xl font-bold md:text-4xl mb-10 flex items-center">
                                <span className="text-orange-500 mr-2">2°</span>  Organização com Propósito
                            </h3>
                            <p className="">Depois de enxergar com clareza, você entra na fase de construção do seu sistema.</p>
                            <p className="">
                                E aqui está o pulo do gato: não se trata de só anotar gastos. Você vai aprender a organizar seu dinheiro de forma inteligente,
                                prática e emocionalmente leve, com base na sua realidade e nos seus objetivos.
                            </p>
                            <p className="">
                                Vamos trabalhar com categorias funcionais, metas simples e ferramentas automatizadas
                                que vão reduzir seu esforço mental e te dar autonomia.
                            </p>
                            <p className="">
                                O que antes parecia cansativo ou técnico demais vira algo natural — porque faz sentido para você.
                            </p>
                        </div>
                    </div>

                    <div className="relative order-1 md:order-2">
                        <div className="relative w-[280px] h-[280px] md:w-[520px] md:h-[520px] mx-auto">
                            <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/02.jpg?height=320&width=320"
                                    alt="Respiração ativa"
                                    width={1080}
                                    height={1080}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute -top-4 right-0">
                                <div className="bg-orange-100 text-xs  md:text-2xl uppercase rounded-full px-3 py-1 font-semibold text-orange-500">
                                    Propósito
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -left-5 w-[70px] h-[70px] md:w-[140px] md:h-[140px] bg-gray-700 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                02
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div className="relative">
                        <div className="relative w-[280px] h-[280px] md:w-[520px] md:h-[520px] mx-auto">
                            <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/04.jpeg?height=320&width=320"
                                    alt="Incorporar"
                                    width={1080}
                                    height={1080}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute -top-4 left-0">
                                <div className="bg-orange-100 text-xs uppercase md:text-2xl rounded-full px-3 py-1 font-semibold text-orange-500">
                                    Liberdade
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -right-5 w-[70px] h-[70px] md:w-[140px] md:h-[140px] bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                03
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 md:text-xl">
                        <h3 className="text-xl font-bold flex items-center md:text-4xl mb-10">
                            <span className="text-orange-500 mr-2">3°</span> Liberdade Sustentável
                        </h3>
                        <p className="">
                            Saber o que fazer é bom. Fazer sem esforço é libertador.
                        </p>
                        <p className="">
                            Na última etapa, você vai transformar o sistema que construiu em um hábito que funciona no piloto automático.
                            Não é sobre virar um “controlador de planilha”, mas sim alguém que sabe tomar decisões com segurança e leveza.
                        </p>
                        <p className="">
                            Você vai perceber o impacto real de ter clareza, autonomia e consistência no dia a dia. Vai parar de apagar incêndios financeiros e começar a se sentir no comando da sua vida.
                        </p>
                        <p className="">
                            A partir daqui, a liberdade financeira deixa de ser um sonho e passa a ser um estilo de vida — possível, leve e sustentável.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Button className=" h-16 md:px-16 bg-orange-500 hover:bg-orange-500 text-lg text-white font-bold">
                        QUERO TER LIBERDADE FINANCEIRA
                    </Button>

                    {/* Payment Methods */}

                </div>
            </div>
        </section>
    )
}

