
import './about.css'
import ProdBar from '../product/ProdBar'
import Footer from '../../components/footer/Footer'

const AboutAs = () => {
    return (
        <div className='' >
            <ProdBar />
            <h1 >The History of Every iPhone Model from 2007–2022 (2023)</h1>
            <div className="containerA" >
                
                    <div className="informA" >
                        <div> <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*WKlvK39M47AG9Ui-6Uf4dg.jpeg' /></div>
                       <div><p className='information'>What was the first iPhone to come out? When did the first iPhone come out? We have the full history of the iPhone, from the first series to the latest iPhone 14. This article will cover the evolution of iPhones over the years, and discuss the notable changes made with each release.</p></div> 
                    </div>
                    <div className="informA">
                        <h2>iPhone: June 29, 2007</h2>
                        <div> <img src='https://miro.medium.com/v2/resize:fit:828/0*WwNqo8Uw45OzZzdf' /></div>
                        <p className='information'>Can you believe 16 GB is all you could put on the original iPhone? Granted, there wasn’t nearly as much data to put on the iPhone yet and certainly no App Store. But you had access to the internet on a screen you could actually see it on, unlike the flip and slider phones of the time. And it could only handle 128 MB of memory. The camera was 2.0 megapixels — so, terrible. But a phone with a camera! Holy moly!</p>
                    </div>
                    <div className="informA">
                        <h2>iPhone 3G: July 11, 2008</h2>
                        <div> <img src='https://miro.medium.com/v2/resize:fit:828/0*hSLNlabSQfl73AbE' /></div>
                        <p className='information'>As far as internal specs go, the iPhone 3G wasn’t much different than the original iPhone. But now there was an App Store! This iPhone got its moniker for its 3G connectivity, which meant access to internet you could actually use without wanting to throw the iPhone across the room.</p>
                    </div>
                    <div className="informA">
                        <h2>iPhone 3GS: June 19, 2009</h2>
                        <div> <img src='https://miro.medium.com/v2/resize:fit:1400/0*IXkSfvq8DBt5kA2F' style={{width:"830px"}}/></div>
                        <p className='information'>Apple introduced the 32 GB storage option with the iPhone 3GS, doubling it from the first iPhone. Clearly, introducing the App Store changed things quickly. Between photos, music, and apps, 16 GB just wasn’t going to cut it. The camera got an upgrade to 3 MP and added video recording. Apple also added Voice Control, although we’d have to wait a couple more years before the introduction of Siri.</p>
                    </div>
                    <div className="informA">
                        <h2>iPhone 4: June 24, 2010</h2>
                        <div> <img src='https://miro.medium.com/v2/resize:fit:828/0*qWwARhzMiyzsgIrc' /></div>
                        <p className='information'>Now we’re getting somewhere. The iPhone 4 was the first iPhone to have a front-facing camera. Little did Apple know, selfies would take over the world. The iPhone 4 also got a Retina display. With 512 MB memory, it was equipped to handle a lot more than even the iPhone 3GS, which only had 256 MB of memory. You can see the technology was beginning to look a little more familiar, but 32 GB was still the maximum amount of storage the iPhone could hold.</p>
                    </div>
                    <div className="informA">
                        <h2>iPhone 4S: October 14, 2011</h2>
                        <div> <img src='https://miro.medium.com/v2/resize:fit:828/0*jAQH5ELrU9R7z2UD' /></div>
                        <p className='information'>Talk about a huge difference between the iPhone 4 and the iPhone 4S: the camera went from 5 MP to a whopping 8 MP. Now, that’s an upgrade. Apple also introduced the 64 GB storage option but kept the memory at 512 MB. Video could then be recorded in 1080p. Oh, I can’t forget — hello, Siri! Apple sold four million units of the iPhone 4S in its first week.</p>
                    </div>
                    <div className="informA">
                        <h2>iPhone 11: September 20, 2019</h2>
                        <div> <img src='https://miro.medium.com/v2/resize:fit:828/0*tnix3cBeL3SItxIX' /></div>
                        <p className='information'>The iPhone 11 is the least expensive of Apple’s annual line, but still has enough new features to be in the running for 2019’s most popular iPhone. The device features a 6.1-inch Liquid Retina display, and comes in six crisp colors. The most exciting addition may be the second camera on the back of the 11, both 12 MP, and offering wide and ultra-wide lenses.</p>
                    </div>
                    
                

            </div>
            <Footer />
        </div>
    )
}

export default AboutAs
