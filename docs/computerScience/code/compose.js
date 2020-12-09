
// const compose = (...fns) => fns.reduce((prev, next) => (...args) => prev(next(args)));

// const a = () => { console.log(1) };
// const b = () => { console.log(2) };
// const c = () => { console.log(3) };

// compose(a, b, c)();

// Decorators 实现装饰器  componentWillMount、componentWillReceiveProps、componentWillUpdate

// export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
//     class Connect extends Component {
//       static contextTypes = {
//         store: PropTypes.object
//       }
  
//       constructor () {
//         super()
//         this.state = {
//           allProps: {}
//         }
//       }
  
//       componentWillMount () {
//         const { store } = this.context
//         this._updateProps()
//         store.subscribe(() => this._updateProps())
//       }
  
//       _updateProps () {
//         const { store } = this.context
//         let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props): {} 
//         let dispatchProps = mapDispatchToProps? mapDispatchToProps(store.dispatch, this.props) : {} 
//         this.setState({
//           allProps: {
//             ...stateProps,
//             ...dispatchProps,
//             ...this.props
//           }
//         })
//       }
  
//       render () {
//         return <WrappedComponent {...this.state.allProps} />
//       }
//     }
//     return Connect
// }

// export const connect = (mapStateProps, mapDispatchProps) => (WrapperComponent) => {
//     return class Connect extends Component{
//         constructor() {
//             super(props)
//             this.state = {
//                 allProps: {}
//             }
//         }

//         componentWillMount() {
//             const { store } = this.context;
//             this._updateProps();
//             store.subscribe(() => this._updateProps());
//         }

//         _updateProps() {
//             const { store } = this.context;
//             const mapStateProps = mapStateToProps ? mapStateProps(store.getState(), this.props) : {};
//             const mapDispatchProps = mapDispatchProps ? mapStateProps(dispatch, this.props) : {};

//             this.setState({
//                 ...mapStateProps,
//                 ...mapDispatchProps,
//                 ...this.props,
//             })
//         }
//         return (
//             <WrapperComponent {...this.allProps}></WrapperComponent>
//         )
//     }
//     return Connect;
// }

// 传递refs 通过回调


// hoc的作用 如果过多hoc会导致函数嵌套，调试非常困难 hoc可以劫持props会导致冲突

// function useDidMount(callback) {
//     useEffect(callback, [])
// }


// shouldComponentUpdate


// componentDidUpdate

// const ref = useRef()
// useEffect(()=>{
//     if (!ref.current) {
//         ref.current = true;
//     } else {
//         callback();
//     } 
// })
// hook是基于数组实现的 在循环或者if判断里 会改边下标

// 日志打点

// useUnmount
// useDidmount
// useDidUpdate

// componentWillUpdate componentDidUpdate
// function useBind(value) {
//     const [value, setValue] = setState(value);
//     const onChange = useCallback((event)=>{
//         setValue(event.target.value);
//     }, [])
//     return {
//         value,
//         onChange
//     }
// }
  