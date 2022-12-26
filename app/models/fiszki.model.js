module.exports = (sequelize, Sequelize) => {
    const Fiszki = sequelize.define("fiszki", {
      first_side: {
        type: Sequelize.STRING
      },
      second_side: {
        type: Sequelize.STRING
      },
      setId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imageId:{
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING
      }
    });
    return Fiszki;
  };