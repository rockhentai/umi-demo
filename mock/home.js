export default {
  'POST /api/home/message': (req, res) => {
    setTimeout(() => {
      res.send({
        ret: 0,
        msg: 'success',
      });
    }, 1000);
  },
}