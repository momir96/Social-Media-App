class Post{
    post_id = '';
    post_content = '';
    user_id = '';
    likes = '';
    api_url = 'https://6339df0166857f698fbc96c4.mockapi.io';

    async create(){
        let session = new Session();
        sessionId = session.getSession();

        let data = {
            user_id: sessionId,
            content: this.post_content,
            likes: 0
        }

        data = JSON.stringify(data);

        let response = await fetch(this.api_url + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        } )
        data = await response.json();
        return data;
    }

    async getAllPosts(){
        let response = await fetch(this.api_url + '/posts');
        let data = await response.json();
        return data;
    }

    like(post_id, likes){
        let data = {
          likes: likes
        }

        data = JSON.stringify(data); //pretvaranje u json

        fetch(this.api_url + '/posts/' + post_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data

        })
        .then(response => response.json())
        .then(data => {alert('Lajkovao si')});
    }

    delete(post_id){
        fetch(this.api_url + '/posts/' + post_id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {alert('Post obrisan')});
    }
}