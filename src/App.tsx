
import './App.css'
import Card from './components/card/Card'

function App() {


  return (
    <div className="app-root">
      <div className="card-demo">
        <Card
          imageUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1974&auto=format&fit=crop"
          imageAlt="Desert dunes under blue sky"
          title="Headline"
          description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
          primaryText="See more"
          secondaryText="Save"
        />
      </div>
    </div>
  )
}

export default App
