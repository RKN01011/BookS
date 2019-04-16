import React from "react";
import Nav from "../coreMenu/indexNav";
import Footer from "../index/footer";
import Menu from "../coreMenu/menu";
import Basket from '../store/basket';
import "./about.scss";

const about = () => {
    var slide = setInterval(dvig_right, 6000)

    function dvig_right () {
            let block = document.getElementsByClassName("Sladers_bloks")[0];
            if (block === undefined) {
                clearInterval(slide)
            }
            else if (block.style.transform === "translateX(0vw)") {
                block.style.transform = "translateX(-100vw)"
            }
            else if (block.style.transform === "translateX(-100vw)") {
                block.style.transform = "translateX(-200vw)"
            }
            else if (block.style.transform === "translateX(-200vw)") {
                block.style.transform = "translateX(0vw)"
            }
        }
    function dvig_left () {
            let block = document.getElementsByClassName("Sladers_bloks")[0];
            if (block.style.transform === "translateX(0vw)") {
                block.style.transform = "translateX(-200vw)"
            }
            else if (block.style.transform === "translateX(-200vw)") {
                block.style.transform = "translateX(-100vw)"
            }
            else if (block.style.transform === "translateX(-100vw)") {
                block.style.transform = "translateX(0vw)"
            }
        }
    
    return(
        <section id="about">
        <Basket />
        <Nav />
        <Menu />
        <div className="head">
        <h4>ABOUT US</h4>
        </div>
        <div className="aboutText">
        <div className="aboutTextDiv">
        <div className="about_TextDiv Img1" />
        <div className="aboutTextDivText">
        <h3>OUR FIRST LOVE:<br />THE BOOK</h3>
        <p>It all started with a simple book. It was Harper Lee’s “To Kill the Mockingbird”, after reading which we decided that we need to help people get acquainted with gems of literature. 
Every single time a new book enlightened us and we grasped new knowledge and experience from it. Paolo Coelho's “Alchemist”, Leo Tolstoy’s “War and Peace” and Neil Gaiman’s “American Gods” - all these books were so different and unique! All these books taught us a lesson, that would undoubtedly be useful for the rest of our lives. So we wanted to help people, too, understand the importance of books. We wanted to become the intermediary in the link between the legendary writers and readers. Who are those great writers? The great writers are those, who build bridges to people we might otherwise have dismissed as strange or unsympathetic. They cut through to the common core of experience. By selection and emphasis, they reveal the important things we share. They show us where to look. They help us to feel. So, the idea of establishing a bookstore arose! A place where people could find the book that's close to their heart. A separate island, isolated from the world, which would take them to new places! From here, the name of the store came - BooksIsland!</p>
        </div>
        </div>
        <div className="aboutTextDiv">
        <div className="about_TextDiv Img2" />
        <div className="aboutTextDivText">
        <h3>OUR FIRST STORE: <br /> BOOK ISLAND</h3>
        <p>Walt Disney once said: “There is more treasure in books than in all the pirate’s loot on Treasure Island." If a book is a treasure, then imagine a book island! 
Our shop is a unique place, a treasury, where thoughts and masterpieces, ideas and contemplation of great people are stored safe. Our bookstore is not just a shop. It's a place where in a warm and peaceful atmosphere our friendly staff will help you find your individual pick in a drop of a hat. But we took care about busy people too! Those who cannot visit us physically due to a busy workload can visit our online store that we recently launched. You can reach it from anywhere you are at anytime you like! Our rich and colorful library, interesting descriptions and attractive visual representation of books will guide you through the selection process. Get your book, read it, and finally, dive into the unique world of wisdom. Don't forget what Stephen King once said: "“Books are a uniquely portable magic.”
Carry your magic with Booksisland!</p>
        </div>
        </div>
        </div>
        <div id="Slader">
        <div className="dvig left" onClick={dvig_left}>
        <div />
        </div>
        <div className="dvig right" onClick={dvig_right}>
        <div />
        </div>
        <div className="Sladers_bloks" style={{transform: "translateX(0vw)"}}>
        <div className="Sladers_bloks1 sl_h2">
        <h2>THERE IS NO RIGHT AGE</h2>
        </div>
        <div className="Sladers_bloks2 sl_h2">
        <h2>IT'S NEVER LATE TO START</h2>
        </div>
        <div className="Sladers_bloks3 sl_h2">
        <h2>READING HAS NO LIMITS</h2>
        </div>
        </div>
        </div>
        <Footer />
        </section>
    )
}
export default about;