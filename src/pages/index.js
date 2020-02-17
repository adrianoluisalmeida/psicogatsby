import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/topo.png";
import about from "../../static/images/about.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailSpace from "../../static/images/cantinho.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Gabrielle Magalhães"/>

        <div className={"page-header home"}>
            <div className={"container"}>
                <div className={"div-img"}>
                    <img alt={"Dashboard"} src={featureImage}/>
                </div>

                <div>
                    <h1>Gabrielle Magalhães</h1>
                    <p>Slogan ou subtítulo</p>
                </div>
            </div>
            
            
            
        </div>

        <div className={"container"}>
            <div className={"features"}>

                <div id="quem-sou"className={"feature__item"}>
                    <div className={"row"}>
                        
                        <div className={"col-12"}>
                            <div className={"feature__content"}>
                                <h2>Quem sou</h2>
                                <p>Descreva seu negócio. Conte sua história e deixe claro sua missão, valores e qual a seu diferencial frente a concorrência. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="terapia" className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Terapia</h2>
                                <p>Use esse espaço para falar sobre sua especialidade ou diferencial. Esta seção deverá chamar a atenção do seu cliente que busca um profissional capacitado e que com sua especialidade, poderá atendê-lo da melhor forma possível. </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div id="meu-cantinho" className={"feature__item"}>
                    <div className={"row"}>
                    <div className={"col-5"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} className={"imageSpace"} src={thumbnailSpace}/>
                            </div>
                        </div>

                        <div className={"col-7"}>
                            <div className={"feature__content space-top"}>
                                <h2>Cantinho da Esperança</h2>
                                <p>Não me esqueço do dia em que ouvi que esse espaço tem "cheiro de Esperança"... Aqui é onde passo grande parte dos meus dias. Aqui é onde tudo acontece, os nossos bastidores de tantos palcos de vides. Um lugar de dores e delícias!". </p>
                            </div>
                        </div>

                        
                    </div>
                </div>

              

               
            </div>
        </div>

        <div id="vamos-conversar" className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Vamos conversar? </h2>
                    <p>Entre em contato comigo, será um prazer atende-lo.</p>
                </div>

                <div className={"button"}>
                    <a href="" target={"_blank"}>
                        55 9 9999-9999
                    </a>

                    <a href="" target={"_blank"}>
                        contato@gabriellemagalhaes.com.br
                    </a>
                </div>
                

            </div>
        </div>
    </Layout>
)

export default IndexPage
