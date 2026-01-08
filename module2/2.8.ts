{
  //

  // promise

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const getPost = async (): Promise<Post> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data: Promise<Post> = await res.json();
    return data;
  };
  console.log(getPost());

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("no data found to load");
      }
    });
  };

  const loadData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    // console.log(data);
    return data;
  };
  const result1 = loadData();
  //   loadData();
  console.log(result1);

  //
}
