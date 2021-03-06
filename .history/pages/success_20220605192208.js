.container {
    padding: 0 2rem;
  }
  
  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .title {
    font-size: 4rem;
  }

  .description {
    margin-top: 0;
    font-size: 2rem;
  }

  .btn {
    width: 200px;
    height: 50px;
    font-size: 1.25rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: white;
  }

  .btn:hover,
  .btn:hover a {
    color: black;
  }


  .btn::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 100%;
    z-index: -1;

    transition: all 200ms ease;
  }

.btn:hover::before {
  height: 5px;
}
  
  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }