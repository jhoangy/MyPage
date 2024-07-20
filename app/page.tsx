import Image from "next/image";

export default function Home() {
  return (
    <main className="">
         <div style={{ backgroundColor: '#DDD6E1', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '0 0px', boxSizing: 'border-box', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '1400px', width: '100%' }}>
        <div>
          <h1>Hey! I'm Justin Hoang</h1>
          <p>
            I am a full-stack developer who loves to create. I enjoy many aspects of life like figuring out how to get around a foreign country, finding the perfect ratios of making the perfect coffee, or making life-lasting connections with strangers. I just graduated from Toronto Metropolitan University and am now seeking a full-time position.
          </p>
          <p>
            I am experienced working in diverse work cultures from working with startups to large corporations. My go-to technologies are React and Django. I am capable of picking up new technologies for new projects. I believe that software development is reliant on the developer’s mind.
          </p>
          <p>Feel free to connect with me on LinkedIn, or email me here!</p>
          <p>“You can’t add more days to your life but you can add more life to your days.”</p>
        </div>
        <div style={{borderRadius: '5px', overflow: 'hidden'}}>
          <Image src="/images/portrait.jpg" width={800} height={800} alt="Portrait" quality={100}/>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button>GitHub</button>
        <button>Resume</button>
        <button>Instagram</button>
      </div>
    </div>
		

        <footer>
            <div >
              <p>&copy; Justtin Hoang 2024</p>
            </div>
          </footer>
	</main>
  );
}
