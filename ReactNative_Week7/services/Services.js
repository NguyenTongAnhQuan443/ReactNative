const apiUrl = 'https://67034f52bd7c8c1ccd4102af.mockapi.io/api/takenote/DataNote';

// Fetch
export const fetchItems = async (setData) => {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error('Fetch - Lỗi kết nối !');
        }
        const data = await response.json()
        setData(data)
    } catch (error) {
        console.log('Lỗi Fetch: ', error)
    }
};

// Add 
export const AddItem = async (newItem) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
        })
        if(!response.ok){
            throw new Error('Add - Lỗi kết nối')
        }
    } catch (error) {
        console.error('Lỗi AddItem', error)
    }
}

// Delete by id
export const deleteItem = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error('Delete - Lỗi kết nối')
        }
    } catch (error) {
        console.log('Lỗi - Delete: ', error)
    }
}

// Filter items by keyword
export const filterItems = async (keyword, setData) => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Filter - Lỗi kết nối !');
        }
        const data = await response.json();
        
        // Lọc các items chứa từ khóa trong title hoặc content
        const filteredData = data.filter(item =>
            item.title.toLowerCase().includes(keyword.toLowerCase()) || 
            item.content.toLowerCase().includes(keyword.toLowerCase())
        );
        
        // Cập nhật dữ liệu đã lọc
        setData(filteredData);
    } catch (error) {
        console.log('Lỗi Filter: ', error);
    }
};
