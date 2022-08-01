# Lesson-06(life-cycles)

###1) mounting
constructor() {}
static getDerivedStateFromProps(nextProps, prevState) {}
render() {}
componentDidMount() {}
###2) updating
shouldComponentUpdate(nextProps, nextState) {}
getSnapshotBeforeUpdate(prevProps, prevState) {}
componentDidUpdate(prevProps, prevState, snapshot) {} 
 
###3) unmounting
componentWillUnmount() {}
componentDidCatch(error, info) {}