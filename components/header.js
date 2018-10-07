import Link from 'next/link'



export default () => (
    <div>


    <head>

        </head>
  <br/>

      
    <Link href='/'>
      <a>Home</a>
    </Link>

    <Link prefetch href='/assets'>
      <a>Assets</a>
    </Link>

    <Link prefetch href='/wellness'>
      <a>Wellness</a>
    </Link>

    <Link prefetch href='/cdps'>
      <a>CDPs</a>
    </Link>
    <Link prefetch href='/dashboard'>
      <a>Dashboard</a>
    </Link>



<style jsx>{`
a {
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
margin: 10px 0;
font-size: 11px;
margin-right: 30px;
padding-left: 5px;
color: #999;
text-transform: uppercase;
text-decoration: none
}

.connected {
content: '';
width: 8px;
height: 8px;
display: inline-block;
border-radius: 100%;
background: #50e3c2;
margin-left: 10px;
margin-right: 8px;
}

`}</style>
</div>

)
