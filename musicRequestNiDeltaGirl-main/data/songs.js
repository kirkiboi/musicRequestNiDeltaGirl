const SONGS_DATA = {

  heroImage: {
    src: 'images/Lover-album.jpg',
    alt: 'Taylor Swift – Lover album cover'
  },

  topSongs: [
    {
      title: 'Kendrick Lamar - Luther',
      cover: 'images/kendrickLamarLuther.jpg',
      src: 'music/Kendrick Lamar & SZA - luther [sNY_2TEmzho].mp3'
    },
    {
      title: 'Lady Gaga, Bruno Mars - Die With A Smile',
      cover: 'images/Lady_Gaga_and_Bruno_Mars_-_Die_with_a_Smile.png',
      src: 'music/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video) [kPa7bsKwL-c].mp3'
    },
    {
      title: 'Alex Warren - Ordinary',
      cover: 'images/ordinary-alex-warren.jpg',
      src: 'music/Alex Warren - Ordinary (Official Music Video) [u2ah9tWTkmk].mp3'
    }
  ],

  mostPlayed: [
    {
      title: 'The Weeknd - Blinding Lights',
      cover: 'images/The_Weeknd_-_Blinding_Lights.png',
      src: 'music/The Weeknd - Blinding Lights (Official Audio) [fHI8X4OXluQ].mp3'
    },
    {
      title: 'Chubby Checker - The Twist',
      cover: 'images/Twist_Chubby_Checker.jpg',
      src: 'music/Chubby Checker - The Twist (Official Music Video) [-CCgDvUM4TM].mp3'
    },
    {
      title: 'Santana ft. Rob Thomas - Smooth',
      cover: 'images/Santanasmooth.jpg',
      src: 'music/Santana - Smooth (Stereo) ft. Rob Thomas [6Whgn_iE5uc].mp3'
    },
    {
      title: 'Bobby Darin - Mack The Knife',
      cover: 'images/mackTheKnife.jpg',
      src: 'music/Bobby Darin _Mack The Knife_ on The Ed Sullivan Show [557lFG-qq5g].mp3'
    },
    {
      title: 'Mark Ronson ft. Bruno Mars - Uptown Funk',
      cover: 'images/uptownFunk.jpg',
      src: 'music/Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars [OPf0YbXqDm0].mp3'
    },
    {
      title: 'LeAnn Rimes - How Do I Live',
      cover: 'images/HowDoILive.jpg',
      src: 'music/LeAnn Rimes - How Do I Live (Lyrics) [sTSEfPngKtA].mp3'
    },
    {
      title: 'LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem',
      cover: 'images/Party_Rock_Anthem_(feat._Lauren_Bennet_&_GoonRock)_-_Single.jpeg',
      src: 'music/LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem (Official Audio) [zIh5AHxh-Ok].mp3'
    },
    {
      title: 'The Black Eyed Peas - I Gotta Feeling',
      cover: 'images/iGotAFeeling.jpg',
      src: 'music/The Black Eyed Peas - I Gotta Feeling (Lyrics) [ipii7KbbJLY].mp3'
    },
    {
      title: 'Los Del Rio (Bayside Boys Remix) - Macarena',
      cover: 'images/macarena.jpg',
      src: 'music/Los Del Rio - Macarena (Bayside Boys Remix) [zWaymcVmJ-A].mp3'
    },
    {
      title: 'Ed Sheeran - Shape of You',
      cover: 'images/Shape_Of_You_(Official_Single_Cover)_by_Ed_Sheeran.png',
      src: 'music/Ed Sheeran - Shape of You (Official Music Video) [JGwWNGJdvx8].mp3'
    }
  ],

  artists: [
    {
      id: 'sza',
      name: 'SZA',
      cover: 'images/sza-ocean-view-women-hd-wallpaper-preview.jpg',
      songs: [
        { title: 'Broken Clocks', cover: 'images/brokenClock.jpg', src: 'music/SZA - Broken Clocks (Official Audio) [0Exxu8lsGYE].mp3' },
        { title: 'Good Days', cover: 'images/SZA_-_Good_Days.png', src: 'music/SZA - Good Days (Audio) [0BdlKkvjEgA].mp3' },
        { title: 'Kill Bill', cover: 'images/SZA_killBill.jpg', src: 'music/SZA - Kill Bill (Official Audio).mp3' },
        { title: 'Snooze', cover: 'images/szaOcean.jpg', src: 'music/SZA - Snooze (Audio).mp3' },
        { title: 'Saturn', cover: 'images/SZA_Saturn.jpg', src: 'music/SZA - Saturn (Lyrics).mp3' }
      ]
    },
    {
      id: 'beatles',
      name: 'Beatles',
      cover: 'images/beatles.jpg',
      songs: [
        { title: 'Hey Jude', cover: 'images/beatles_HeyJude.jpg', src: 'music/Hey Jude (Remastered 2015) [mQER0A0ej0M].mp3' },
        { title: 'Let It Be', cover: 'images/beatles_LetItBe.jpg', src: 'music/Let It Be (Remastered 2009) [QDYfEBY9NM4].mp3' },
        { title: 'Here Comes The Sun', cover: 'images/beatles_HereComesTheSun.jpg', src: 'music/The Beatles - Here Comes The Sun (Lyrics) [BCGH8eU-_lA].mp3' },
        { title: 'Come Together', cover: 'images/beatles_ComeTogether.jpg', src: 'music/The Beatles - Come Together (lyrics) [gezWgqFXkPA].mp3' },
        { title: 'Yellow Submarine', cover: 'images/beatles_YellowSubmarine.jpg', src: 'music/The Beatles - Yellow Submarine [m2uTFF_3MaA].mp3' }
      ]
    },
    {
      id: 'adele',
      name: 'Adele',
      cover: 'images/adele.jpg',
      songs: [
        { title: 'To Be Loved', cover: 'images/toBeLoved.jpg', src: 'music/Adele - To Be Loved (Official Lyric Video) [_dlExeOyFh4].mp3' },
        { title: 'Easy On Me', cover: 'images/easyOnMe.jpg', src: 'music/Adele - Easy On Me (Official Lyric Video) [X-yIEMduRXk].mp3' },
        { title: 'Send My Love', cover: 'images/sendMyLove.png', src: 'music/Adele - Send My Love (To Your New Lover) [fk4BbF7B29w].mp3' },
        { title: 'Set Fire To The Rain', cover: 'images/setFireToTheRain.jpg', src: 'music/Set Fire to the Rain [a2giXO6eyuI].mp3' },
        { title: 'When We Were Young', cover: 'images/whenWeWereYoung.png', src: 'music/When We Were Young [a1IuJLebHgM].mp3' }
      ]
    },
    {
      id: 'taylor',
      name: 'Taylor Swift',
      cover: 'images/taylor.jpg',
      songs: [
        { title: 'Blank Space', cover: 'images/blankSpace.jpg', src: 'music/Taylor Swift - Blank Space (Lyrics) [uHpcbSsPrRE].mp3' },
        { title: 'I Knew You Were Trouble', cover: 'images/iKnewYouWereTrouble.jpg', src: 'music/Taylor Swift - I Knew You Were Trouble (Lyrics) [9eakEQSBR8o].mp3' },
        { title: 'Cruel Summer', cover: 'images/cruelSummer.jpg', src: 'music/Taylor Swift - Cruel Summer (Official Audio) [ic8j13piAhQ].mp3' },
        { title: 'You Belong With Me', cover: 'images/youBelongWithMe.jpg', src: 'music/Taylor Swift - You Belong With Me [VuNIsY6JdUw].mp3' },
        { title: 'Wildest Dreams', cover: 'images/wildestDream.jpg', src: 'music/Taylor Swift - Wildest Dreams [IdneKLhsWOQ].mp3' }
      ]
    },
    {
      id: 'the1975',
      name: 'The 1975',
      cover: 'images/BlueDoor_Landscape-web-optimised-1000-CREDIT-Rebeka-Brylewski-1000x600.jpg',
      bgPositionY: 'calc(30% - 100px)',
      songs: [
        { title: 'Robbers', cover: 'pictures/robbers.jpg', src: 'music/The 1975 - Robbers [wjHgiSx0RNQ].mp3' },
        { title: 'A Change Of Heart', cover: 'pictures/changeOfHearts.png', src: 'music/The 1975 - A Change Of Heart (Official Video) [trbwqF0d7NA].mp3' },
        { title: 'About You', cover: 'pictures/aboutYou.jpg', src: 'music/The 1975 - About You (Official) [tGv7CUutzqU].mp3' },
        { title: 'Somebody Else', cover: 'pictures/somebodyElse.jpg', src: 'music/the 1975 - somebody else __ lyrics [VNsd8Yo5zvc].mp3' },
        { title: 'When We Are Together', cover: 'pictures/whenWeAreTogether.jpg', src: 'music/The 1975 - When We Are Together [pQeBFjbo4KQ].mp3' }
      ]
    },
    {
      id: 'frankEly',
      name: 'Frank Ely',
      cover: 'images/frankEly.jpg',
      bgPositionY: 'calc(20% - 100px)',
      songs: [
        { title: 'Kailangan Mo Ba Ang Puso Ko', cover: 'images/kailanganMoBaAngPusoKo.jpg', src: 'music/FRANK ELY - Kailangan Mo Ba Ang Puso Ko (Official Video) [CcrGyWA_ids].mp3' },
        { title: 'Pahingi Ako Ng Kiss', cover: 'images/pahingiAkoNgKiss.jpg', src: 'music/FRANK ELY - Pahingi Ako Ng Kiss (Official Video) [Ozni6qgP_7Y].mp3' },
        { title: 'Maisayaw', cover: 'images/maisayaw.jpg', src: 'music/FRANK ELY - Maisayaw (Lyric Video) [jG5xRVCjhiI].mp3' },
        { title: 'Namimiss', cover: 'images/namimiss.jpg', src: 'music/FRANK ELY - Namimiss (Official Lyric Video) [MS-ncrh-tko].mp3' },
        { title: 'Maya Kana Uwi', cover: 'images/mayaKanaUwi.jpg', src: 'music/FRANK ELY - Maya Kana Uwi (Official Video) [z6Pk07TtK3o].mp3' }
      ]
    },
    {
      id: 'munimuni',
      name: 'Munimuni',
      cover: 'images/munimuni.jpg',
      bgPositionY: 'calc(30% - 100px)',
      songs: [
        { title: 'Kalachuchi', cover: 'images/kalachuchi.jpg', src: 'music/Munimuni - Kalachuchi (Official Lyric Video) [yJ3t30T31pM].mp3' },
        { title: "Sa'yo", cover: 'images/sayo.jpg', src: "music/Munimuni - Sa'yo (Lyric Video) [qIk1ZvFhaGs].mp3" },
        { title: 'Bawat Piyesa', cover: 'images/bawatPiyesa.jpg', src: 'music/Bawat Piyesa [vvFSVIy1Nqs].mp3' },
        { title: 'Simula', cover: 'images/simula.jpg', src: 'music/Munimuni - Simula (Official Lyric Video) [tG-0Mq8M0vI].mp3' },
        { title: 'Sa Hindi Pag Alala', cover: 'images/saHindiPagAlala.jpg', src: 'music/Sa Hindi Pag-Alala [q2HxISPwhT8].mp3' }
      ]
    },
    {
      id: 'danielCaesar',
      name: 'Daniel Caesar',
      cover: 'images/daniel.jpg',
      bgPositionY: 'calc(35% - 100px)',
      songs: [
        { title: 'Get You', cover: 'images/getYou.jpg', src: 'music/Get You (feat. Kali Uchis) [xyUQKDE57Ag].mp3' },
        { title: 'Transform', cover: 'images/transform.jpg', src: 'music/Transform (feat. Charlotte Day Wilson) [r_nbv4_t8yQ].mp3' },
        { title: 'Always', cover: 'images/always.jpg', src: 'music/Daniel Caesar - Always (Official Audio) [pKFd12id5oQ].mp3' },
        { title: 'Valentina', cover: 'images/valentina.jpg', src: 'music/Daniel Caesar - Valentina (Official Music Video) [Xc2D5NWzsfc].mp3' },
        { title: 'Please Do Not Lean', cover: 'images/pleaseDoNotLean.jpg', src: 'music/Daniel Caesar - Please Do Not Lean (Official Audio) ft. BADBADNOTGOOD [9RyyTNuGQkQ].mp3' }
      ]
    }
  ]

};