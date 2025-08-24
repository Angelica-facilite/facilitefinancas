export default function FooterSection() {
  return (
    <footer className="bg-orange-500 text-white pt-4 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Community and CTA Section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-gray-200 pb-12">
       
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-300 hover:bg-orange-300 text-white px-6 py-2 rounded-md">
              Entrar no Venda todo Santo Dia
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 px-6 py-2 rounded-md flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Tirar dúvidas via Whatsapp
            </Button>
          </div>
        </div> */}

        {/* Footer Links */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <div className="mb-4">
              <div className="text-xs  mb-1">MÉTODO</div>
              <div className="text-2xl font-bold">
                <span className="">Jornada da </span> <span className="">Liberdade</span>
                <br />
                <span className="text-orange-300">Financeira</span> 
              </div>
            </div>
            <p className="text-xs  mt-4">
              Aviso Legal: "Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da
              obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada
              no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer
              resultado específico."
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Aula Gratuita
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Sobre o Método
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Resultados dos Alunos
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Cobranças e Finanças
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Tirar Dúvidas via Whatsapp
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-orange-300 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-300 transition-colors">
                  Política de Reembolso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-300 transition-colors">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="text-center  text-sm">
          <p>© {new Date().getFullYear()} Facilite finanças. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

