const fetchedUserData = {
  id: 'u1',
  name: 'Lokesh',
  //   job: { title: 'JSE', description: 'Junior Software Engineer' },
};

// console.log(fetchedUserData.job.title); //TypeError: Cannot read properties of undefined (reading 'title')

console.log(fetchedUserData?.job?.title); //undefined
