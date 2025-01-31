```javascript
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function MyComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div>
      <Link href="/?id=1">
        <a>Home</a>
      </Link>
      <Link href="/about?id=2">
        <a>About</a>
      </Link>
      {id && <p>The ID is: {id}</p>}
    </div>
  );
}

export default MyComponent;
```