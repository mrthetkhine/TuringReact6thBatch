import Image from 'next/image'
//import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import HelloWorld,{Another} from "./components/HelloWorld";
import JsxExample from "./components/JsxExample";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import Profile from "./components/Profile";
import ItemList from "./components/ItemList";
import CustomButton from "./components/CustomButton";
import Counter from "./components/Counter";
import ListDynamic from "./components/ListDynamic";
import SpecificCounter from "./components/SpecificCounter";
import Clock from "./components/Clock";
import ToDoListUI from "./components/ToDoListUI";
import Tab from "./components/Tab";
import ResetCounter from "./components/ResetCounter";
import CounterReducer from "./components/reducer/CounterReducer";
import TodoListWithReducer from "./components/reducer/TodoListWithReducer";
import ToDoListWithReducerTwo, {TodoInput} from "./components/reducer/ToDoListWithReducerTwo";
import ReuseComponent from "./components/reducer/ReuseComponent";
import ContextDemo from "./components/context/ContextDemo";
import ScalingWithContext from "./components/context/ScalingWithContext";
import FormDemo from "./components/form/FormDemo";
import BasicForm from "./components/form/BasicForm";
import RenderProperty from "./components/pattern/RenderProperty";
import AnotherBasicForm from "./components/form/AnotherBasicForm";
import {ValidationSchemaExample} from "./components/form/ValidationSchemaExample";
import OurFormik,{InputField} from "./components/form/OurFormik";
import CustomFormikExample from "./components/form/CustomFormikExample";
import CounterWithRef from "./components/CounterWithRef";
import Stopwatch from "./components/StopWatch";
import ControlDOM from "./components/ControlDOM";
import DatePicker from "./components/DatePicker";
import EffectDemo from "./components/hook/EffectDemo";
import TodoWithEffect from "./components/hook/TodoWithEffect";
import EffectDependency from "./components/hook/EffectDependency";
import OldSchool from "./components/class_component/OldSchool";
import HookDemo from "./components/hook/HookDemo";
import Unique from "./components/hook/Unique";
import CallBackHookDemo from "./components/hook/CallBackHookDemo";
import DeferedComponent from "./components/hook/DeferedComponent";
import MemoHookDemo from "./components/hook/MemoHookDemo";
import ForwardRefDemo from "./components/hook/ForwardRefDemo";
import ImperativeHandleDemo from "./components/hook/ImperativeHandleDemo";
import LayoutEffectDemo from "./components/hook/LayoutEffectDemo";
import PortalDemo from "./components/PortalDemo";
import TodosApp from "./components/hook/external_storage/TodoApp";
import Welcome from "./components/class_component/Welcome";
import OldSchoolCounter from "./components/class_component/OldSchoolCounter";
import UnmountDemo from "./components/class_component/UnmountDemo";
import ConditionalRender from "./components/class_component/ConditionalRender";
import TableDemo from "./components/TableDemo";
import ProblemComponent from "./components/ProblemComponent";
import HocDemo from "./components/pattern/hoc/HocDemo";
import LoadingHocDemo from "./components/pattern/hoc/LoadingHocDemo";
import RenderContainer from "./components/pattern/render_property/RenderContainer";
import RenderPropertyDemo from "./components/pattern/render_property/RenderPropertyDemo";
export default function Home() {
    const items = ["one","two","three"];
  return (
    <main >
      <div >
        {/*  <HelloWorld/>
         <JsxExample/>*/}
       {/* <Avatar/>*/}
            {/*<Greet message={"Hello World"}
                    label={"Not something"}/>
          <Greet message={"Good evening"}/>
          <Greet />*/}
        {/*  <Profile isAdmin={false}/>
          <Profile isAdmin={true}/>*/}
         {/* <ItemList items={items}/>*/}
         {/* <CustomButton/>*/}
         {/* <Counter/>
          <Counter/>*/}
          {/*<Clock/>*/}
       {/*  <ListDynamic/>*/}
        {/*  <SpecificCounter />*/}
         {/* <ToDoListUI/>*/}
         {/* <Tab headers={["Tab1","Tab2","Tab3"]}>
              <div>
                  Page 1
              </div>
              <div>
                  Page 2
              </div>
              <div>
                  Page 3
              </div>
          </Tab>*/}
         {/* <ResetCounter/>*/}
        {/*  <CounterReducer/>*/}
         {/* <TodoListWithReducer/>*/}
        {/* <ToDoListWithReducerTwo/>
          <ReuseComponent/>*/}
        {/*  <ContextDemo/>*/}
         {/* <ScalingWithContext/>*/}
        {/*  <FormDemo/>*/}
       {/*   <BasicForm/>*/}
          {/*<RenderProperty>
              {
                  ()=><div>Hello Children</div>
              }
          </RenderProperty>*/}
         {/* <AnotherBasicForm/>*/}
         {/* <ValidationSchemaExample/>*/}
       {/* <CustomFormikExample/>*/}
          {/*<OurFormik initialValues={{
              username : 'TK2',
              email : 'test2@gmail'
          }}>
              <label htmlFor={"username"}>User Name</label>
              <InputField id={"username"}
                          name="username"
                          className={"form-control"}/>
              <label>Email</label>
              <InputField name="email"
                          className={"form-control"}/>
              <button type={"submit"}
                      className={"btn btn-primary"}> Submit</button>
          </OurFormik>*/}
        {/*  <CounterWithRef/>*/}
         {/* <Stopwatch/>*/}
        {/*  <ControlDOM/>*/}
         {/* <DatePicker/>*/}
        {/*  <EffectDemo/>*/}
        {/*  <TodoWithEffect/>*/}
          {/*<EffectDependency/>
       */}
        {/*  <HookDemo/>*/}
        {/*  <Unique/>*/}
          {/*<CallBackHookDemo/>*/}
         {/* <DeferedComponent/>*/}
          {/*<MemoHookDemo/>*/}
          {/*<ForwardRefDemo/>
          <ImperativeHandleDemo/>*/}
        {/*  <LayoutEffectDemo/>*/}
         {/* <PortalDemo/>*/}
         {/* <TodosApp/>*/}
        {/*  <OldSchool/>*/}
        {/*  <Welcome message={"Hello from class component"}/>*/}
          {/*<OldSchoolCounter/>*/}
          {/*<UnmountDemo/>*/}
         {/* <ConditionalRender/>*/}
          {/*<TableDemo/>*/}
        {/*  <ProblemComponent/>*/}
         {/* <HocDemo/>*/}
         {/* <LoadingHocDemo/>*/}
          <RenderPropertyDemo/>
      </div>
    </main>
  )
}
