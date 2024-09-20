import React from "react"
import Title, {TitleSize } from "/src/components/ui/title/title";
import "./style.css"

function About () {
    return (
        <section className="about"> 
          <div className="about__wraper">
            <Title size={TitleSize.BIG}>Первое в России котокафе </Title>
            <p className="about__text">
               Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.
            </p>
            <p className= "about__time">
               Рабочее время с 8:00 до 23:00
            </p>
            <p className="about__adres">
              Санкт-Петербург,  набережная реки Карповки, дом 5, литера П
            </p>
          </div>
          
        </section>
        
    )
}
export default About;