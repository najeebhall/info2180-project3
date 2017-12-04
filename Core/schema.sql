
DROP DATABASE IF EXISTS projdb;
CREATE DATABASE projdb;
USE projdb;



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: projdb
--

-- --------------------------------------------------------

--
-- Table structure for table message
--

CREATE TABLE IF NOT EXISTS message (
  id int(11) NOT NULL AUTO_INCREMENT,
  body text NOT NULL,
  subject text NOT NULL,
  user_id int(11) NOT NULL,
  recipient_ids int(11) NOT NULL,
  PRIMARY KEY (id)
)AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table message_read
--

CREATE TABLE IF NOT EXISTS message_read (
  id int(11) NOT NULL AUTO_INCREMENT,
  message_id int(11) NOT NULL,
  reader_id int(11) NOT NULL,
  date date NOT NULL,
  PRIMARY KEY (id)
)AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table user
--

CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL AUTO_INCREMENT,
  first_name text NOT NULL,
  last_name text NOT NULL,
  password text NOT NULL,
  username text NOT NULL,
  PRIMARY KEY (id)
) AUTO_INCREMENT=1 ;
