
    const artists = [
      {
        name: 'Arijit Singh',
        photo: 'img 2/download (10).jpeg',
        genre: 'Playback Singer • Bollywood',
        followers: '42M+',
        songs: '1,200+',
        awards: '150+',
        bio: 'Arijit Singh is an Indian playback singer and music composer. Known for his soulful voice and emotional depth, he has become one of the most successful and popular singers in Bollywood. His journey from reality shows to becoming the voice of a generation is truly inspiring.',
        topSongs: [
          { title: 'Tum Hi Ho', plays: '500M+' },
          { title: 'Channa Mereya', plays: '450M+' },
          { title: 'Ae Dil Hai Mushkil', plays: '400M+' },
          { title: 'Gerua', plays: '380M+' },
          { title: 'Kalank Title Track', plays: '350M+' }
        ],
        achievements: 'Winner of multiple Filmfare Awards, IIFA Awards, and National Film Award. Recognized as one of the most streamed Indian artists globally on platforms like Spotify and YouTube.'
      },
      {
        name: 'Shreya Ghoshal',
        photo: 'img 2/images (4).jpeg',
        genre: 'Playback Singer • Classical',
        followers: '38M+',
        songs: '2,000+',
        awards: '200+',
        bio: 'Shreya Ghoshal is one of India\'s most versatile and celebrated playback singers. With a career spanning over two decades, she has sung in multiple languages including Hindi, Tamil, Telugu, Bengali, and Malayalam. Her melodious voice has touched millions of hearts.',
        topSongs: [
          { title: 'Pal Pal Har Pal', plays: '420M+' },
          { title: 'Ghar More Pardesiya', plays: '380M+' },
          { title: 'Deewani Mastani', plays: '350M+' },
          { title: 'Teri Ore', plays: '320M+' },
          { title: 'Silsila Ye Chaahat Ka', plays: '300M+' }
        ],
        achievements: 'Four National Film Awards, Seven Filmfare Awards, and numerous other accolades. Featured in Forbes India Celebrity 100 list multiple times.'
      },
      {
        name: 'Diljit Dosanjh',
        photo: 'img 2/download (9).jpeg',
        genre: 'Punjabi Singer • Actor',
        followers: '25M+',
        songs: '800+',
        awards: '100+',
        bio: 'Diljit Dosanjh is a Punjabi singer, actor, and television presenter who works in Punjabi and Hindi cinema. He is recognized as one of the leading artists in the Indian music industry, known for his powerful voice and charismatic performances.',
        topSongs: [
          { title: 'Do You Know', plays: '280M+' },
          { title: 'Proper Patola', plays: '250M+' },
          { title: 'Patiala Peg', plays: '240M+' },
          { title: 'GOAT', plays: '220M+' },
          { title: 'Lover', plays: '200M+' }
        ],
        achievements: 'Winner of multiple PTC Punjabi Film Awards, Filmfare Awards Punjabi, and first turbaned Sikh to present at the Grammy Awards. International concert tours across USA, Canada, UK, and Australia.'
      },
      {
        name: 'Atif Aslam',
        photo: 'img 2/download (8).jpeg',
        genre: 'Pakistani Singer • Actor',
        followers: '30M+',
        songs: '600+',
        awards: '90+',
        bio: 'Atif Aslam is a Pakistani playback singer and actor. Known for his powerful vocal belting technique, he has sung numerous chart-topping songs in both Pakistan and India, making him one of the most popular singers in South Asia.',
        topSongs: [
          { title: 'Tera Hone Laga Hoon', plays: '380M+' },
          { title: 'Jeena Jeena', plays: '320M+' },
          { title: 'Pehli Nazar Mein', plays: '290M+' },
          { title: 'Tajdar-e-Haram', plays: '270M+' },
          { title: 'Aadat', plays: '250M+' }
        ],
        achievements: 'Multiple Lux Style Awards, recipient of Tamgha-e-Imtiaz (Pakistan\'s fourth-highest civilian decoration). One of the highest-paid singers in Pakistan and recognized across South Asia.'
      }
    ];

    

      const audio = document.getElementById('mainAudio');
    const currentTrackDisplay = document.getElementById('currentTrack');
    const cards = document.querySelectorAll('.card[data-song]');

    
    const artistCards = document.querySelectorAll('.artist-card');
    artistCards.forEach(card => {
      card.addEventListener('click', function() {
        const artistIndex = parseInt(this.getAttribute('data-artist'));
        showArtistInfo(artistIndex);
      });
    });

    
    function showArtistInfo(index) {
      const artist = artists[index];
      
      document.getElementById('artistPhoto').src = artist.photo;
      document.getElementById('artistName').textContent = artist.name;
      document.getElementById('artistGenre').textContent = artist.genre;
      document.getElementById('artistFollowers').textContent = artist.followers;
      document.getElementById('artistSongs').textContent = artist.songs;
      document.getElementById('artistAwards').textContent = artist.awards;
      document.getElementById('artistBio').textContent = artist.bio;
      document.getElementById('artistAchievements').textContent = artist.achievements;
      
    
      const topSongsList = document.getElementById('topSongs');
      topSongsList.innerHTML = '';
      artist.topSongs.forEach((song, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="song-number">${i + 1}</span>
          <div class="song-info">
            <div class="song-title">${song.title}</div>
            <div class="song-plays">${song.plays} plays</div>
          </div>
        `;
        topSongsList.appendChild(li);
      });
      
    
      document.getElementById('artistSidebar').classList.add('open');
      showNotification('🎤 Loading ' + artist.name + ' info...');
    }

       function closeArtistInfo() {
      document.getElementById('artistSidebar').classList.remove('open');
    }

    
    const playlistCards = document.querySelectorAll('.playlist-card');
    playlistCards.forEach(card => {
      card.addEventListener('click', function() {
        const playlistName = this.getAttribute('data-playlist');
        const playlistTitle = this.querySelector('.title').textContent;
        
        
        const youtubeLink = prompt('🎵 Enter YouTube playlist link for "' + playlistTitle + '":');
        
        if (youtubeLink && youtubeLink.trim() !== '') {
                    showNotification('✅ Link added for ' + playlistTitle + '!');
          
                   setTimeout(() => {
            window.open(youtubeLink, '_blank');
          }, 1000);
        } else if (youtubeLink !== null) {
          showNotification('❌ No link added');
        }
      });
    });

    
    cards.forEach(card => {
      card.addEventListener('click', function() {
               if (this.classList.contains('premium-ad')) {
          showNotification('✨ Upgrade to Premium for unlimited music!');
          return;
        }
        
        const songIndex = parseInt(this.getAttribute('data-song'));
        const song = songs[songIndex];
        
                audio.src = song.file;
        
        
        currentTrackDisplay.textContent = song.name;
        
                audio.load();
        audio.play().catch(err => {
          console.log('Audio play prevented:', err);
          showNotification('Click play button to start 🎵');
        });
        
        
        showNotification('Now Playing: ' + song.name);
      });
    });

    
    function showNotification(message) {
      const statusMsg = document.getElementById('statusMsg');
      statusMsg.textContent = message;
      statusMsg.classList.add('show');
      
      setTimeout(function() {
        statusMsg.classList.remove('show');
      }, 3000);
    }

    function showMessage() {
      showNotification('Welcome to My Music! 🎵');
    }
  audio.addEventListener('play', function() {
      if (currentTrackDisplay.textContent === 'Sooraj Dooba Hain') {
        showNotification('Playing: Sooraj Dooba Hain');
      }
    });

      window.addEventListener('load', function() {
      setTimeout(function() {
        showNotification('Welcome! Click any card to play 🎵');
      }, 1000);
    });


