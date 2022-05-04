import React from 'react';
import '../styles/Flow.css';

const Flow = props => {
  return (
    <div>
      <h2 id="flowTitle">F l o w &nbsp; A r t ?</h2>
      <div id="flowDescription">
        <p className="purpText">Flow art is a movement based art form that incorporates dance and creative expression with prop manipulation. Each flow prop varies hugely and within each prop, there are</p>
        <p className="purpText">many possible styles of movement. Flow is highly individual, and thus, what one person does with a prop may be entirely different that what another person does with it.</p>
        <p id="pSpace" className="purpText">Flow props take on many different forms including . . .</p>
        <div id="propList" className="purpText">
          <li id="prop">Hoops</li>
          <li id="prop">Poi</li>
          <li id="prop">Fans</li>
          <li id="prop">Contact Staff</li>
          <li id="prop">Dragon Staff</li>
          <li id="prop">Leviwand</li>
          <li id="prop">Buugeng</li>
          <li id="prop">Clubs</li>
          <li id="prop">Contact balls</li>
          <li>Ropedart</li>
          <li>And the list goes on!</li>
        </div>
        <p>A lot of time people pick up a flow art because it looks fun, (and it is!) but there are a ton of reasons to keep up this hobby other than just enjoying doing it.</p>
        <p>Practicing a flow art is a moving mediation for your mind and body, offering release when you need it and mental challenge/ stimulation when you want it. Learning the basics</p>
        <p>of a prop are simple, but the possibilities of what can be done with a prop are endless. In addition to being a fantastic gift that you can give to yourself to increase</p>
        <p>your physical and mental fitness, reduce your stress, and step away from yourself into a flow, there is also the flow art community to consider. In most areas, you'll find</p>
        <p>flow artists, which mans you'll find connections, which one can never have too many of. The flow art community is vast and is truly a beautiful community to be a part of.</p>
        <div id="encourage">
          <p>I encourage you to pick up a flow prop and try it out for yourself! There are many props to consider and there are many artists online to get inspiration from! On instagram or other</p>
          <p>social media, searching for #flowart or #(the name of a specific prop) will show many accounts and videos to check out to try and see what props you might be interested in.</p>
        </div>
        <p></p>
        <p className="purpText" id="closingFlow">Personally, my favorite props are hoops and poi! You can find videos of my flow on my flow art instagram account <a href="https://www.instagram.com/maxwell.hoopswell/" target="_blank" rel="noopener noreferrer" id="instaFlow">@maxwell.hoopswell</a>!</p>
      </div>
    </div>
  );
};

export default Flow;