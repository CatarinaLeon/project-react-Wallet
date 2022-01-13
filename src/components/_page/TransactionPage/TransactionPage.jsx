import { useState } from 'react';
import CategoriesList from '../../CategoriesList/CategoriesList';
import TransactionForm from '../../TransactionForm/TransactionForm';
import GoBackHeader from '../../_shared/GoBackHeader/GoBackHeader';
import { useMainContext } from '../../../context/MainProvider';

const TransactionPage = ({ transType }) => {
  const { toggleActivePage, categories, addCategory } = useMainContext();

  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [dataForm, setDataForm] = useState({
    isOpenCategories: false,
    date: '2021-12-10',
    time: '14:53',
    category: categories[0],
    sum: '',
    currency: 'EUR',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    // this.setState({ [name]: value });
    setDataForm(prev => ({ ...prev, [name]: value }));
  };

  const closeCategoriesList = () => {
    // this.setState({ isOpenCategories: false });
    setIsOpenCategories(false);
  };

  const openCategoriesList = () => {
    // this.setState({ isOpenCategories: true });
    setIsOpenCategories(true);
  };

  // const {
  //   addCategory,
  //   // closeTransactionPage,
  //   addData,
  //   transType,
  //   categories,
  //   setError,
  // } = this.props;

  // const { isOpenCategories, ...dataForm } = this.state;

  const formTitle =
    !isOpenCategories && (transType === 'costs' ? 'Расходы' : 'Доходы');

  return (
    <section style={{ width: '400px', margin: '0 auto' }}>
      <GoBackHeader
        title={isOpenCategories ? 'Категории' : formTitle}
        handleGoBack={isOpenCategories ? closeCategoriesList : toggleActivePage}
      />
      {!isOpenCategories ? (
        <TransactionForm
          handleChange={handleChange}
          openCategoriesList={openCategoriesList}
          dataForm={dataForm}
          transType={transType}
          // setError={setError}
        />
      ) : (
        <CategoriesList categories={categories} addCategory={addCategory} />
      )}
    </section>
  );
};
export default TransactionPage;
