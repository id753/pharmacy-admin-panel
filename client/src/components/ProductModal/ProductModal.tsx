// import css from './ProductModal.module.css';

interface AddNewProductProps {
  onClose: () => void;
}

const ProductModal = ({ onClose }: AddNewProductProps) => {
  return (
    <div>
      <p>ProductModal</p>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default ProductModal;
