
    //  Xử lý
    const apiUrl = 'https://67034f52bd7c8c1ccd4102af.mockapi.io/api/takenote/DataNote';

      // fetch
      // State to store fetched data
      const [data, setData] = useState([]); // Set an empty array as the initial state
      const [loading, setLoading] = useState(true); // State to manage loading status
  
      // Fetch data from API when component mounts
      useEffect(() => {
          const fetchItems = async () => {
              try {
                  const response = await fetch(apiUrl);
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  const data = await response.json();
                  setData(data); // Store the fetched data in state
                  setLoading(false); // Set loading to false once data is fetched
              } catch (error) {
                  console.error('Error fetching items:', error);
                  setLoading(false);
              }
          };
  
          fetchItems(); // Call fetch function on component mount
      }, []);

    // 2. Thêm
    async function addItem(newItem) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Added item:', data);
            return data;
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }

    // Sửa
    async function updateItem(id, updatedItem) {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedItem),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Updated item:', data);
            return data;
        } catch (error) {
            console.error('Error updating item:', error);
        }
    }

    // 4. Xóa một mục theo ID
    async function deleteItem(id) {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Deleted item with id:', id);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    // add
    // const noteAdd = {name: 'Quân', note: 'Quân test'}
    // addItem(noteAdd)

    // Update
    // const noteUpdate = { name: 'New Name', note: 'New Note' }
    // updateItem(1, noteUpdate)

    // delete
    deleteItem(1)

    // fetch
    console.log(fetchItems())




    // const note = { id: 10, note: 'hello' }
    // console.log(addItem({note}))


    // const noteUpdate = {note: 'Quan ness'}
    // updateItem(10, noteUpdate)
    console.log(fetchItems())

