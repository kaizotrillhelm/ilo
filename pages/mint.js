import Head from 'next/head'

import { useState, useEffect } from 'react';



export default function Mint() {



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

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <a href="/petpage/index.html" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT BREED AND TRADE COCK BLOCKS                       <div className=" p-2 w-1/2"><img src="images/bigface.png" alt="" width="1200px" className="feature-image"/></div> </a>
                  <a href="/characterpage/index.html" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT BREED AND TRADE PLAYER CHARACTERS                       <div className=" p-2 w-1/2"><img src="images/gallery1.jpeg" alt="" width="1200px" className="feature-image"/></div> </a>

                  <a href="https://opensea.io/collection/cockblockslol" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">COCK BLOCKS ON OPENSEA                       <div className=" p-2 w-1/2"><img src="images/traits4.gif" alt="" width="1200px" className="feature-image"/></div> </a>
                  <a href="https://opensea.io/collection/cockhandlers" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">PLAYER CHARACTERS ON OPENSEA                       <div className=" p-2 w-1/2"><img src="images/grab2.png" alt="" width="1200px" className="feature-image"/></div> </a>
                  
                </div>
                  
                  
            
              
                
            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }