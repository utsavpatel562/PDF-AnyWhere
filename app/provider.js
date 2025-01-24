import React from 'react'

function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <div>
        <ConvexProvider client={convex}>{children}</ConvexProvider>;
        {children}
    </div>
  )
}

export default Provider