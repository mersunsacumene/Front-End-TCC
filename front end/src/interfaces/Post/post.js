export const Post = {
    id: '',
    author: {
        name: '',
        imageUrl: '',
        job: '',
        id: ''
      },
      imageUrl: '',
      content: '',
      likes: 0,
      comments: []
    }; 

    const minhaPostagem = Object.create(Post);
    minhaPostagem.id = '1';
    minhaPostagem.author.name = 'João';
    minhaPostagem.imageUrl = 'https://exemplo.com/imagem.jpg';
    minhaPostagem.content = 'Este é um exemplo de postagem em JavaScript.';
    minhaPostagem.likes = 10;
    minhaPostagem.comments.push({ name: 'Maria', comment: 'Legal!' });
    
  