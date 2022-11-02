import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <body>
      <Nav></Nav>

        {/* hero section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around' 
        }}
      >

        {/* hero left -- picture of character-- parent container */}
        <div
          style={{
            backgroundColor: "grey",
            width: "40%",
            margin: "100px",
            border: "1px solid black",
            position: "relative",
          }}
        >

          {/* vertical carousel container left*/}
          <div
            style={{
              backgroundColor: "purple",
              position: "absolute",
              maxWidth: "10%",
              flexWrap: "wrap",
              minWidth: "10%"
            }}
          >
            fhgfghdfghgdffcbcvgdhfg
          </div>

          {/* portrait container */}
          <div></div>

          {/* bottom carousel container */}
          <div></div>

        </div>

        {/* hero right--- blurb about selected character */}
        <div
          style={{
            backgroundColor: "grey",
            width: "50%",
            padding: "100px",
            border: "1px solid black"
          }}
        >
          <h1>Backstory</h1>
          <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p>

        </div>
      </section>
    </body>
  );
}

export default App;
