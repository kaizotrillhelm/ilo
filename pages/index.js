import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Boring Bananas Company</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <meta property="og:title" content="Cock Blocks" key="ogtitle" />
        <meta property="og:description" content="Cock Blocks is a Play To Earn Battle Royale Fighting game with Building, Crafting, and Virtual Pet Breeding.  It is powered by NFTs on the Polygon Blockchain (and soon Solana).  Inspired by 20 years of wishing for an online version of Dreamcast's PowerStone and Chao Gardens with a level editor, it is built on a Voxel engine for ease of building and more destructible environments.  Made by Kaizo Trillhelm." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://cockblocks.lol/" key="ogurl"/>
        <meta property="og:image" content="https://cockblocks.lol/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://cockblocks.lol/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="cockblocks.lol" key="twdomain" />
        <meta property="twitter:url" content="https://cockblocks.lol/" key="twurl" />
        <meta name="twitter:title" content="Cock Blocks" key="twtitle" />
        <meta name="twitter:description" content="Cock Blocks is a Play To Earn Battle Royale Fighting game with Building, Crafting, and Virtual Pet Breeding.  It is powered by NFTs on the Polygon Blockchain (and soon Solana).  Inspired by 20 years of wishing for an online version of Dreamcast's PowerStone and Chao Gardens with a level editor, it is built on a Voxel engine for ease of building and more destructible environments.  Made by Kaizo Trillhelm." key="twdesc" />
        <meta name="twitter:image" content="https://cockblocks.lol/images/Hola.gif" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/Hola.gif" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="#about" className="text-4xl bg-zlau text-white hover:text-black m-6">About Cock Blocks</a>
              <a href="#roadmap" className="text-4xl bg-zlau text-white hover:text-black m-6">Roadmap</a>
              <a href="/mint" className="text-4xl bg-glau text-#ff0000 hover:text-black m-6">MINT!</a>
              <a href="/alphademo" className="text-4xl bg-glau text-#ff0000 hover:text-black m-6">PLAY ALPHA DEMO!</a>
              <a href="#traits" className="text-4xl bg-zlau text-white hover:text-black m-6">WHY ARE COCK BLOCKS AWESOME!?</a>
              <a href="#team" className="text-4xl bg-zlau text-white hover:text-black m-6">Team</a>
              <a href="#contact" className="text-4xl bg-zlau text-white hover:text-black m-6">Contact</a>
              <a href="https://twitter.com/cockblockslol" className="text-4xl bg-zlau hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/8Wk9Hp6UyV" className="text-4xl bg-zlau  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl bg-clau Poppitandfinchsans text-white ">Welcome to the world of Cock Blocks!</h1>
                    <p className="text-2xl text-white my-6 bg-clau montserrat">"Cock Blocks" are CryptoKitties style tradable NFT pets that act as powerups in "Cock Blocks" a the Play To Earn Battle Royale Fighting game with Building, Crafting, and Virtual Pet Breeding.  It is powered by NFTs on the Polygon Blockchain (and soon Solana). </p>
                    <p className="text-2xl text-white my-6 bg-clau montserrat">Cock Blocks is inspired by 20 years of wishing for an online version of Dreamcast's PowerStone and Chao Gardens with a level editor, it is built on a Voxel engine for ease of building and more destructible environments.  </p>
                    <p className="text-2xl text-white my-6 bg-clau montserrat">Please try the alpha demo!  
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> LAUNCHED <br />‍
                    <span className="text-white text-2xl bg-clau montserrat"><strong>TOTAL ORIGIN SUPPLY: 10000 COCK BLOCKS 10000 PLAYER CHARACTERS</strong> Bananas.<br/><strong>PRICE: 23 MATIC </strong>each.</span></p>
                    

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/Hola.gif" width="500px" />
            </div>
            <div className="flex flex-col items-center"> 

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING AND DEMO PAGE!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/Traits4.gif" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans bg-clau text-6xl text-center">WHY ARE COCK BLOCKS AWESOME!?</h2>
                    <p className="text-xl text-white bg-clau my-6  montserrat"> Cock Blocks appear in treasure chests scattered throughout levels.  If 3 Cock Blocks are collected you power up- moving faster, having higher defense, and striking power.  If 1 Apex Block is collected you can turn super.  Cock Blocks can be purchased, won through battle, or earned through proper breeding with our DNA system always bringing interesting results!
                    </p>
                    <p className="text-xl text-white bg-clau my-6  montserrat"> Items and weapons will be earnable and craftable within Solo Play and Exhibitionist Play, but that is a different system from blockchain PVE and PVP, which are NFT exclusive.     
                    </p>
                    <p className="text-xl text-white bg-clau my-6  montserrat"> Each character can be customized aesthetically, but is preset to one fighting type- Speed, Power, Defense, Flying, Etc...  Items found within battles can be provided to Cock Blocks and used for farming within the Cock Breeding Tope.
                    </p>
                    <p className="text-xl text-white bg-clau my-6  montserrat"> The fate of the world's bananas depends on it.
                    </p>
                    <p className="text-xl text-white bg-clau my-6  montserrat"> Your support in this time of need is greatly appreciated!   
                    </p>
                  </div>
                </div>
                
                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau bg-clau Poppitandfinchsans text-7xl text-center">Gallery of Images</h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/gallery1.jpeg" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/gallery2.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery3.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery4.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery5.jpeg" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>

              <div id="roadmap" className="">
                <img src="/images/Roadmap.png"/>
              <h2 className="text-7xl bg-clau text-center Poppitandfinchsans text-blau my-4">OUR MISSION STATEMENT</h2>
              <p className="text-xl text-white text-center my-6  montserrat"> Simple. To be the largest contributor to charity in the NFT space, as measured by % <span className="font-bold"> of primary sales. </span>  
              </p>
              <h2 className="text-7xl bg-clau text-center Poppitandfinchsans text-blau my-4">HOW WE'RE GIVING BACK</h2>
              <p className="text-xl text-white my-6  montserrat">Ever since the inception of the <span className="text-5xl Poppitandfinch ">boring</span> <span className="text-blau text-5xl Poppitandfinchsans">Bananas</span> <span className="text-5xl Poppitandfinch">company</span> after <a target="_blank" href="https://twitter.com/thedigitalvee/status/1405896585142280192" className="underline text-black font-bold">this tweet</a>, our goal has been to <span className="text-blau text-5xl Poppitandfinchsans">GIVE BACK</span> as much as possible.
              </p>
              <p className="text-xl bg-clau text-white my-6  montserrat"> A minimum of 
              <span className="font-bold"> 25% of all sales</span> are donated to charity. 
              </p>
              <p className="text-xl text-white my-6  montserrat"> At 100% sellout, we pledge to donate <span className="font-bold"> 60 MATIC </span> from primary sales.
              </p>      
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <ul className="">
                <li className="text-xl bg-clau text-white my-6  montserrat"><span className="font-bold"> More PowerStone Like Gameplay: </span> More weapons, more enemies, third person multiplayer, transformations, custom level editor and saving mechanism, lifting and throwing players. </li>
                <li className="text-xl bg-clau text-white my-6  montserrat"><span className="font-bold"> Land With Farming: </span> A sale for your own plot of land to build, grow, and craft whatever you please!  Character customization.  More movement types.  More multiplayer options for PVP, Collaborative fun, and hanging out/helping on other people's land.</li>
                <li className="text-xl bg-clau text-white my-6  montserrat"><span className="font-bold"> More Fleshed Out Single Player </span> Quests for PVP and PVE, competitive minigames for the pets, deeper blockchain integration, the Cock Blocks story starts mattering within the game.  Mod support.    </li>

              </ul>
              <p className="text-xl bg-clau text-white my-6  montserrat"> NFT items and weapons can be purchased and crafted, holding these items gives you a better chance of them appearing in a chest in battle.  
              </p>
              <p className="text-xl bg-clau text-white my-6  montserrat"> There are also items within the game that are not NFTs, and single player modes can be enjoyed separate from blockchain based PVE and PVP.
              </p>


              </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl bg-clau text-center Poppitandfinchsans text-blau my-4">COCK BLOCKS TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/Vee.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center bg-clau text-5xl text-center Poppitandfinchsans text-blau">Kaizo Trillhelm</h3>
                    <a href="https://twitter.com/kaizotrillhelm" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@kaizotrillhelm)</a>
                  </div>
                    <center> <p>

                    <p className="text-xl bg-clau text-white my-6  montserrat"> Cock Blocks is developed independently by Kaizo Trillhelm, a multimedia artist.  It is the result of years of research into many parts of how video games are made and maintained.  
                    </p>
                    <p className="text-xl bg-clau text-white my-6  montserrat"> This research means that before any promises are made I understand how they can be implemented and can quickly learn the simplest way to get them into the game.
                    </p>
                    <p className="text-xl bg-clau text-white my-6  montserrat"> This also means that the game's core concepts of fighting with cool weapons and powerups in a buildable voxel world will not fall into the trap of corporate dilution.  
                    </p>
                    <p className="text-xl bg-clau text-white my-6  montserrat"> My body of work has always pushed to take an art form and do the coolest weirdest things possible with it, and this dream project is no exception.  If you give me Fruity Loops I will make you an awesome unique song, if you give me Unity and Blockchain technology I will make you an awesome unique game.
                    </p>
                    

                  

                  
                   </p> </center> 
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/MJ.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">MJDATA</h3>
                    <a href="https://twitter.com/champagneman" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@champagneman)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/MB.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">MADBOOGIE</h3>
                    <a href="https://twitter.com/madboogieart" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@madboogieart)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/Jui.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Jui</h3>
                    <a href="https://twitter.com/mz09art" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@mz09art)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/Berk.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">BERK</h3>
                    <a href="https://twitter.com/berkozdemir" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@berkozdemir)</a>                </div>
                
                </div>
       


              </div>   
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/letstalk.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau bg-clau Poppitandfinchsans text-6xl text-center">CONTACT OUR TEAM</h2>
                    <p className="text-xl bg-clau text-white my-6  montserrat"> We'd love to hear from you! 
                    </p>
                    <p className="text-xl bg-clau text-white my-6  montserrat"> Hit us up at <a className="text-black bg-clau underline font-bold" target="_blank" href="mailto:kaizotrillhelm@gmail.com">kaizotrillhelm@gmail.com</a>,<br/>
                    or you can reach out to us on Twitter <a className="text-black underline font-bold" target="_blank" href="https://twitter.com/kaizotrillhelm">@kaizotrillhelm</a><br/> 
                    Alternatively, join our <a className="text-black underline font-bold" target="_blank" href="https://discord.gg/8Wk9Hp6UyV">Discord Server</a>.
                    </p>
                  </div>
       


              </div>   
          </div>  
    </div>  
    )
  }