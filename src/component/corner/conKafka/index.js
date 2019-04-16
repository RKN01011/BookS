import React from "react";
import ConTime from "../conTime/conTime";
import Nav from "../../coreMenu/indexNav";
import Footer from "../../index/footer";
import Menu from "../../coreMenu/menu";
import Basket from '../../store/basket';
import "../corner.scss";
import ConCool from "../conCool/conCool";


const ConKafka = () => {
    return (
<section id="ConCoolIndex">
<Menu />
<Basket />
<Nav />
<div className="bigPicher kafka" />
<div className="Con_text">
<h2>Why Reading Is Cool?</h2>
<p>For some reason, there's a general stigma against reading. It's "boring," or you "don't have time." <br />
Instead of watching 12 hours straight of Netflix and hating yourself for it, here are some reasons to put down the controller and open a book instead. <br />
Why is reading cool?  </p>
<ol>
    <li>It’s like watching a movie in your head. <br />
    <p>You cast the characters, you create the scene, and it’s all in your brain. How cool is that? </p></li>
    <li>Books don’t need to be charged. <br />
    <p>Please ignore this if you’re reading an ebook. You need to charge those. If you’re reading the old fashion books, though, you don’t need to charge them. They don’t go out of commission unless you throw them into a body of water or burn them. Please don’t do that.    </p></li>
    <li>You can take books anywhere. <br />
    <p>You can read books on the bus, on a park bench, at school, on the rooftop, and in so many more places. The possibilities are endless.  </p></li>
    <li>People think you’re smarter because you read books.  <br />
    <p>For some strange reason, people think you’re smarter just because you read. It doesn’t matter if it’s teen fiction, or adventure books. The book creates an illusion of superior intellect. </p></li>
    <li>Reading expands your vocabulary. <br />
    <p>So I guess there might be a little something to being smarter because you read. The more you read, the more words you’ll come across, hence your repertoire of words grow. </p></li>
    <li>Reading prevents Alzheimer’s. <br />
    <p>According to the National Academy of Sciences, it found elderly people “who regularly read or play mentally challenging games are 2 ½ times less likely to have the debilitating illness, which affects 4 million Americans.” Even if you’re not elderly yet, it’s good to start the habit now, so when you reach a higher age it doesn’t seem like a chore. </p></li>
    <li>If you’re reading a racy/embarrassing scene, no one will know. <br />
    <p>If you were watching the same scene on TV, the people around you would know about your questionable taste in media. The only way someone would know about the scene you’re reading is if they look over your shoulder and start to read it, too (this happens sometimes, so be aware of your surroundings). </p></li>
    <li>The more you read, the better you write. <br />
    <p>By being exposed to how others express themselves on the page, you subconsciously pick up how to write better. Writing is an important skill, especially in college, so if you’re trying to polish those writing skills, try picking up a book for a change. </p></li>
    <li>Reading can make you happy. <br />
    <p>No, put down your Biology textbook. I’m talking about reading for pleasure (unless you like reading Biology textbooks for fun. I don’t judge your life choices). According to a 2009 study by the University of Sussex, reading for just six minutes can reduce stress levels by up to 68%. When you’re not as stressed out, you feel a lot lighter, so there’s more room for happiness. </p></li>
    <li>You get to go on an adventure. <br />
    <p>Books transport you places without you having to leave the comfort of your home. Not only that, you can adventure in your pajamas. And without moving.  Case closed. <br />
    So go on and be happy, smarter, and generally more awesome – read a book! </p></li>

</ol>
</div>
<div className="cornerChose">
<ConCool />
<ConTime />
</div>
<Footer />
</section>
    )
}

export default ConKafka;