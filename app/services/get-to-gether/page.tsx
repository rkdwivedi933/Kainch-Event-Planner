import GettogetherAbout from "@/app/get-together/GettogetherAbout"
import GettogetherHero from "@/app/get-together/GettogetherHero"
import GettogetherSection from "@/app/get-together/GettogetherSection"

function GetTogetherPage() {
  return (
    <div>
      <GettogetherHero/>
      <GettogetherAbout/>
      <GettogetherSection/>
    </div>
  )
}

export default GetTogetherPage
