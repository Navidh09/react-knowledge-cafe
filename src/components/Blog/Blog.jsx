import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover_photo, author_name,author_img,title,publish_date,hashtags} = blog;
    return (
        <div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;