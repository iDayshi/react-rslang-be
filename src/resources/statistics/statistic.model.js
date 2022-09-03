const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const StatisticSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    learnedWords: {
      type: Number
    },
    gamesAudioCall: {
      type: Object,
      learnedNewWords: Number,
      series: Number,
      percentage: Number,
      gamesPlayed: Number
    },
    gamesSprint: {
      type: Object,
      learnedNewWords: Number,
      series: Number,
      percentage: Number,
      gamesPlayed: Number
    },
    optional: {
      type: Object,
      required: false
    }
  },
  { collection: 'statistic' },
  {
    timestamps: { createdAt: 'created_at' }
  }
);

addMethods(StatisticSchema);

module.exports = mongoose.model('Statistic', StatisticSchema);
